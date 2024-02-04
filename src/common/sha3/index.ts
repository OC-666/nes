/** not sha-3-256 */
export
const sha256 = async (rom: File) => {
  const hashBuffer = await crypto.subtle.digest('SHA-256', await rom.arrayBuffer())
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('')
}
