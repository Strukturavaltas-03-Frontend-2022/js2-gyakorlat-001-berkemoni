'use strict';

/*első paraméterként egy karaktert kap, a többi paraméter pedig tetszőleges számú tömb,
 amelyek string-eket tartalmaznak
   - összefűzi egy tömbbe az összes elemet,
   - eltávolítja az ismétlődő elemeket,
   - eltávolítja az összes olyan string-et, amely tartalmazza az első paraméterként 
   megadott karaktert,
   - eltávolítja a string-ek végén lévő whitespace karaktert,
   - visszaadja ezt az új tömböt.*/


const concatArrays = (value,...arr) => {
    const uniqueArray = Array.from('(new Set(newArray = [...arr])'.trimEnd())
};

export default concatArrays;