


export function setter(k: string, v: any){
  localStorage.setItem(k, v);
}

export function getter(k: string){
  return localStorage.getItem(k);
}

