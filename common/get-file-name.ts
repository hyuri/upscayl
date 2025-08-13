export default function getFilenameFromPath(path: string) {
  if (!path) return "";
  const separator = path.includes("/") ? "/" : "\\";
  filename = path.split(separator).slice(-1)[0];
  return filename.replace(/^\.+/, '')
}
