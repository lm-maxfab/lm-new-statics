export default function unknownObjToStr (obj: unknown): string|null {
  if (obj instanceof Error) return obj.message
  else if ((obj as any).toString instanceof Function) return (obj as any).toString()
  else return null
}
