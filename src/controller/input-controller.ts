export function getInput(e: React.KeyboardEvent<HTMLInputElement>, value: string, setValue: React.Dispatch<React.SetStateAction<string>>, PRef: React.RefObject<HTMLParagraphElement>) {
    const input = e.key.toUpperCase()
    
    if(PRef.current) {
        if(PRef.current.style.backgroundColor === 'blue'){
            if(input === 'BACKSPACE') setValue('')
        }
        else if(input === 'BACKSPACE') setValue(value.slice(0, -2))
    }

    if(e.ctrlKey && input === 'BACKSPACE') setValue('') 
    if(PRef.current) PRef.current.style.backgroundColor = 'transparent'
   
    if(e.ctrlKey && input === 'A' && PRef.current) {
        if(value === "") return
        PRef.current.style.backgroundColor = 'blue'
    }
    
    else if (input.length === 1 && /[A-Z0-9`~!@#$%^&*()-_=+\[\]{};:'",.<>/?\\|]/.test(input))
        setValue(`${value}${String.fromCharCode(219)}${input}`);
    
    else if(input.length === 1 && input === ' ') 
        setValue(`${value}${String.fromCharCode(219)} `)
}
