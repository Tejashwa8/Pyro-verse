let pyodideReady = null;

async function ensurePyodide() {
  if (!pyodideReady) {
    importScripts("https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js");
    pyodideReady = loadPyodide();
  }
  return pyodideReady;
}

self.onmessage = async (event) => {
  const { id, code } = event.data;
  try {
    const pyodide = await ensurePyodide();
    pyodide.setStdout({
      batched: (text) => self.postMessage({ id, type: "stdout", text }),
    });
    pyodide.setStderr({
      batched: (text) => self.postMessage({ id, type: "stderr", text }),
    });
    await pyodide.runPythonAsync(code);
    self.postMessage({ id, type: "complete" });
  } catch (error) {
    self.postMessage({ id, type: "error", message: error.message });
  }
};
