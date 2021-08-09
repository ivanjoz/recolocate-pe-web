export const svgToBas64Url = (svgRaw,avoidPreRender?): string => {
  if(typeof window !== 'undefined'){
    const base64 = window.btoa(svgRaw)
    return `data:image/svg+xml;base64,${base64}`
  } else {
    return ''
  }
}