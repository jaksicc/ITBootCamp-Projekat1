let nizPrihodi = []
let nizRashodi = []
let count1 = 0
let count2 = 0
let sum1 = 0
let sum2 = 0
let budzet = 0


// Prvi deo
const divOpis = document.querySelector('#opis')
const divBudzet = document.querySelector('#budzet')
const divPrihod = document.querySelector('#prihod')
const divRashod = document.querySelector('#rashod')




// Drugi deo
const divForma = document.querySelector('#forma')
const forma = document.querySelector('#transakcije')
const select = document.querySelector('#prihod-rashod')
const inputOpis = document.querySelector('#opis-transakcije')
const inputIznos = document.querySelector('#iznos-transakcije')
const btnPotvrdi = document.querySelector('#Potvrdi')


// Treci deo
const divContainer = document.querySelector('#item-container')
const divListaPrihoda = document.querySelector('#lista-prihoda')
const ulPrihodi = document.querySelector('#prihodi')
const divListaRashoda = document.querySelector('#lista-rashoda')
const ulRashodi = document.querySelector('#rashodi')


forma.addEventListener('submit', (e) => {
    e.preventDefault()

    if (select.value == 1) {
        if(inputOpis.value == '' || inputIznos.value <= 0){
            window.alert('Uneli ste neispravnu vrednost za Opis ili Iznos')
        }
        else{
        //sad ubacio
        const spandugme = document.createElement('span')
        spandugme.id = 'dugme'
        //-------
        const btnDelete = document.createElement('button')
        btnDelete.textContent = 'Delete'
        btnDelete.addEventListener('click', () => {
            prihodLi.remove()
            nizPrihodi.splice(nizPrihodi.indexOf(prihod),1)
            sum1 -= prihod.vrednost
            spanPrihod.innerHTML = `+ ${sum1.toLocaleString()}`
            budzet = (sum1 - sum2).toLocaleString()
            const pBudzet = document.querySelector('#pBudzet')
            pBudzet.innerHTML = budzet
            count1 = 0
            console.log(nizPrihodi)


        })
        spandugme.appendChild(btnDelete)
        const prihodLi = document.createElement('li')
        prihodLi.id = 'prihodLi'
        prihodLi.innerHTML = `<span>${inputOpis.value}</span> + <span>${inputIznos.value}</span>`
        prihodLi.append(spandugme)
        ulPrihodi.append(prihodLi)
     
            let prihod = {
            id: count1,
            vrednost: inputIznos.value
            }
            nizPrihodi.push(prihod)
        count1++

        sum1 += Number(inputIznos.value)
        const spanPrihod = document.querySelector('#spanPrihod')
        spanPrihod.innerHTML = `+ ${sum1.toLocaleString()}`
        const spanProcenat = document.querySelector('#procenat')
        spanProcenat.innerHTML = `${Math.round((sum2*100)/sum1)}%`
        }
        


    }
    else if (select.value == 2) {
        if(inputOpis.value == '' || inputIznos.value <= 0){
            window.alert('Uneli ste neispravnu vrednost za Opis ili Iznos')
        }
        else{
        //------
        const spandugme = document.createElement('span')
        spandugme.id = 'dugme2'
        // ------
        const btnDelete = document.createElement('button')
        btnDelete.textContent = 'Delete'
        // rashodLi.textContent = `${inputOpis.value} - ${inputIznos.value} ${Math.round((inputIznos.value * 100) / sum1)}%`
        btnDelete.addEventListener('click', () => {
            rashodLi.remove()
            nizRashodi.splice(nizRashodi.indexOf(rashod),1)
            sum2 -= rashod.vrednost
            spanRashod.innerHTML = `- ${sum2.toLocaleString()}`
            spanProcenat.innerHTML = `${Math.round((sum2*100)/sum1)}%`
            budzet = (sum1 - sum2).toLocaleString()
            pBudzet.innerHTML = budzet
            console.log(nizRashodi, nizPrihodi)


        })

        spandugme.appendChild(btnDelete)
        const rashodLi = document.createElement('li')
        rashodLi.id = 'rashodLi'
        rashodLi.innerHTML = `<span>${inputOpis.value}</span> 
        <span>-${inputIznos.value}</span> <span>${Math.round((inputIznos.value * 100) / sum1)}%</span>`
        rashodLi.append(spandugme)
        ulRashodi.append(rashodLi)

        let rashod = {
            id: count2,
            vrednost: inputIznos.value
        }
            nizRashodi.push(rashod)
        count2++

        sum2 += Number(inputIznos.value)
        const spanRashod = document.querySelector('#spanRashod')
        spanRashod.innerHTML = `- ${sum2.toLocaleString()}`

        let procenat = Math.round((sum2 * 100) / sum1)
        const spanProcenat = document.querySelector('#procenat')
        spanProcenat.innerHTML = `${procenat}%`
    }
    }

    budzet = (sum1 - sum2).toLocaleString()
    const pBudzet = document.querySelector('#pBudzet')
    pBudzet.innerHTML = budzet
    

    console.log(nizRashodi, nizPrihodi)
    inputIznos.value = ''
    inputOpis.value = ''
    
})