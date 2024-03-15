export function getInput(e: React.KeyboardEvent<HTMLInputElement>, 
    value: string, setValue: React.Dispatch<React.SetStateAction<string>>, 
    imgRef: React.RefObject<HTMLDivElement>) {

    const input = e.key.toUpperCase()
    
    if(imgRef.current) {
        if(imgRef.current.style.backgroundColor === 'blue'){
            if(input === 'BACKSPACE') setValue('')
        }
        else if (input === 'BACKSPACE') {
            const charCode = 219;
            const char = String.fromCharCode(charCode);
        
            const charIndex = value.lastIndexOf(char);
            if (charIndex !== -1) {
                setValue(value.slice(0, charIndex));
            } else {
                setValue(value.slice(0, -1));
            }
        }
    }

    if(e.ctrlKey && input === 'BACKSPACE') setValue('') 
    if(imgRef.current) imgRef.current.style.backgroundColor = 'transparent'
   
    if(e.ctrlKey && input === 'A' && imgRef.current) {
        if(value === "") return
        imgRef.current.style.backgroundColor = 'blue'
    }
    
    else if(input.length === 1 && /[<#*?:"/\\>]/.test(input)) {
        if(input === "<") setValue(`${value}${String.fromCharCode(219)}less_than`)
        else if(input === ">") setValue(`${value}${String.fromCharCode(219)}greater_than`)
        else if(input === "*") setValue(`${value}${String.fromCharCode(219)}asterisk`)
        else if(input === ":") setValue(`${value}${String.fromCharCode(219)}colon`)
        else if(input === "\"") setValue(`${value}${String.fromCharCode(219)}double_quote`)
        else if(input === "/") setValue(`${value}${String.fromCharCode(219)}divide`)
        else if(input === "#") setValue(`${value}${String.fromCharCode(219)}pagar`)
        else if(input === "?") setValue(`${value}${String.fromCharCode(219)}question_mark`)
        else if(input === "\\") setValue(`${value}${String.fromCharCode(219)}forward_dash`)
    }
    
    else if(input.length === 1 && /[A-Z0-9`~!@$%^&()-_=+\[\]{};',.|]/.test(input))
        setValue(`${value}${String.fromCharCode(219)}${input}`);
    
    else if(input.length === 1 && input === ' ') 
        setValue(`${value}${String.fromCharCode(219)} `)
}
