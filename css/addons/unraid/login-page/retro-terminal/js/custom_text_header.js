
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
  _   _ ______ ____  _    _ _               _   _ ______  _____ _______ 
 | \ | |  ____|  _ \| |  | | |        /\   | \ | |  ____|/ ____|__   __|
 |  \| | |__  | |_) | |  | | |       /  \  |  \| | |__  | (___    | |   
 | . ` |  __| |  _ <| |  | | |      / /\ \ | . ` |  __|  \___ \   | |   
 | |\  | |____| |_) | |__| | |____ / ____ \| |\  | |____ ____) |  | |   
 |_| \_|______|____/ \____/|______/_/    \_\_| \_|______|_____/   |_|   
                                                                        
 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header

