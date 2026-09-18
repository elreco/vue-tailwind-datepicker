"use client";
import { useEffect, useId, useRef, useState } from "react";
import { Button } from "./button";
import { Progress } from "./progress";
export interface UploadContext {
  signal: AbortSignal;
  onProgress: (percent: number) => void;
}
export function FileUpload({
  label = "Upload a file",
  accept,
  maxBytes = 10 * 1024 * 1024,
  onUpload,
  onFileSelect,
}: {
  label?: string;
  accept?: string;
  maxBytes?: number;
  onUpload?: (file: File, context: UploadContext) => Promise<void>;
  onFileSelect?: (file: File) => void;
}) {
  const inputId = useId(),
    hintId = useId(),
    controller = useRef<AbortController | null>(null),
    input = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null),
    [dragging, setDragging] = useState(false),
    [error, setError] = useState(""),
    [status, setStatus] = useState<"idle" | "uploading" | "done">("idle"),
    [progress, setProgress] = useState<number | null>(null);
  useEffect(() => () => controller.current?.abort(), []);
  function choose(next: File | undefined) {
    if (!next) return;
    setError("");
    if (next.size > maxBytes) {
      setError(
        `Choose a file smaller than ${Math.round(maxBytes / 1024 / 1024)} MB.`,
      );
      return;
    }
    if (
      accept &&
      !accept.split(",").some((raw) => {
        const rule = raw.trim().toLowerCase();
        return rule.startsWith(".")
          ? next.name.toLowerCase().endsWith(rule)
          : rule.endsWith("/*")
            ? next.type.startsWith(rule.slice(0, -1))
            : next.type === rule;
      })
    ) {
      setError("This file type is not supported.");
      return;
    }
    controller.current?.abort();
    setFile(next);
    setStatus("idle");
    setProgress(null);
    onFileSelect?.(next);
  }
  async function upload() {
    if (!file || !onUpload || status === "uploading") return;
    const active = new AbortController();
    controller.current = active;
    setStatus("uploading");
    setError("");
    setProgress(null);
    try {
      await onUpload(file, {
        signal: active.signal,
        onProgress: (value) => {
          if (!active.signal.aborted)
            setProgress(
              Number.isFinite(value) ? Math.max(0, Math.min(100, value)) : null,
            );
        },
      });
      if (!active.signal.aborted) {
        setProgress(100);
        setStatus("done");
      }
    } catch {
      if (!active.signal.aborted) {
        setError("Upload failed. Please try again.");
        setStatus("idle");
      }
    }
  }
  return (
    <div className="cr-file-upload">
      <div
        className="cr-dropzone"
        data-dragging={dragging || undefined}
        onDragOver={(event) => {
          event.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(event) => {
          event.preventDefault();
          setDragging(false);
          if (status !== "uploading") choose(event.dataTransfer.files[0]);
        }}
      >
        <label htmlFor={inputId} className="cr-label">
          {label}
        </label>
        <input
          ref={input}
          id={inputId}
          type="file"
          accept={accept}
          disabled={status === "uploading"}
          aria-describedby={hintId}
          onChange={(event) => choose(event.target.files?.[0])}
        />
        <p id={hintId} className="cr-description">
          Choose or drop one file. Up to {Math.round(maxBytes / 1024 / 1024)}{" "}
          MB.
        </p>
      </div>
      {file && (
        <div
          className="cr-stack"
          style={{ marginTop: "calc(var(--cr-space)*4)" }}
        >
          <p className="cr-description">
            {file.name} · {Math.ceil(file.size / 1024)} KB
          </p>
          {status === "uploading" && (
            <Progress label="Upload progress" value={progress} />
          )}
          <div className="cr-row">
            {onUpload && status !== "done" && (
              <Button disabled={status === "uploading"} onClick={upload}>
                Upload
              </Button>
            )}
            <Button
              variant="outline"
              onClick={() => {
                controller.current?.abort();
                setStatus("idle");
                setFile(null);
                setProgress(null);
                setError("");
                if (input.current) input.current.value = "";
              }}
            >
              {status === "uploading" ? "Cancel upload" : "Remove file"}
            </Button>
          </div>
          {status === "done" && (
            <p role="status" className="cr-description">
              Upload complete.
            </p>
          )}
          {!onUpload && (
            <p className="cr-description">
              File selected locally. Connect onUpload to send it to your storage
              service.
            </p>
          )}
        </div>
      )}
      {error && (
        <p
          role="alert"
          className="cr-description"
          style={{ color: "var(--cr-destructive)" }}
        >
          {error}
        </p>
      )}
    </div>
  );
}
