
document.querySelector('.ans').addEventListener('click', function()
{   let rarity = document.querySelector('#rarity')
    let vostType = document.querySelector('#type')
    let region = document.querySelector('#region')
    let articleAll = document.querySelectorAll('article')
    for (let article of articleAll){ article.style.display = 'none'}
    if ((rarity.value === 'rarity') && (vostType.value === 'type') && (region.value === 'region'))
    {
        for (let article of articleAll)
        { 
           article.style.display = 'block'
        }
    }
    else if ((rarity.value === 'star') && (vostType.value === 'recovery') && (region.value === 'mondstadt'))
    {
        for (let article of articleAll)
        { 
            if(article.classList.contains('star') && article.classList.contains('recovery') && article.classList.contains('mondstadt'))
                {article.style.display = 'block'}
        }
    }
    else if ((rarity.value === 'star') && (vostType.value === 'recovery'))
    {
        for (let article of articleAll)
        { 
            if(article.classList.contains('star') && article.classList.contains('recovery'))
                {article.style.display = 'block'}
        }
    }
    else if ((rarity.value === 'star2') && (vostType.value === 'recovery'))
    {
        for (let article of articleAll)
        { 
            if(article.classList.contains('star2') && article.classList.contains('recovery'))
                {article.style.display = 'block'}
        }
    }
    else if ((rarity.value === 'star3') && (vostType.value === 'recovery'))
    {
        for (let article of articleAll)
        { 
            if(article.classList.contains('star3') && article.classList.contains('recovery'))
                {article.style.display = 'block'}
        }
    }
    else if ((rarity.value === 'star') && (region.value === 'mondstadt'))
    {
        for (let article of articleAll)
        { 
            if(article.classList.contains('star') && article.classList.contains('mondstadt'))
                {article.style.display = 'block'}
        }
    }
    else if ((rarity.value === 'star2') && (region.value === 'mondstadt'))
    {
        for (let article of articleAll)
        { 
            if(article.classList.contains('star2') && article.classList.contains('mondstadt'))
                {article.style.display = 'block'}
        }
    }
    else if ((rarity.value === 'star3') && (region.value === 'mondstadt'))
    {
        for (let article of articleAll)
        { 
            if(article.classList.contains('star3') && article.classList.contains('mondstadt'))
                {article.style.display = 'block'}
        }
    }
    else if ((rarity.value === 'star4') && (region.value === 'mondstadt'))
    {
        for (let article of articleAll)
        { 
            if(article.classList.contains('star4') && article.classList.contains('mondstadt'))
                {article.style.display = 'block'}
        }
    }
    else if ((vostType.value === 'recovery') && (region.value === 'mondstadt'))
    {
        for (let article of articleAll)
        { 
            if(article.classList.contains('recovery') && article.classList.contains('mondstadt'))
                {article.style.display = 'block'}
        }
    }
    else if ((vostType.value === 'recovery') && (region.value === 'li-yue'))
    {
        for (let article of articleAll)
        { 
            if(article.classList.contains('recovery') && article.classList.contains('li-yue'))
                {article.style.display = 'block'}
        }
    }
    else if ((vostType.value === 'recovery') && (region.value === 'inazuma'))
    {
        for (let article of articleAll)
        { 
            if(article.classList.contains('recovery') && article.classList.contains('inazuma'))
                {article.style.display = 'block'}
        }
    }
    else if ((vostType.value === 'recovery') && (region.value === 'sumeru'))
    {
        for (let article of articleAll)
        { 
            if(article.classList.contains('recovery') && article.classList.contains('sumeru'))
                {article.style.display = 'block'}
        }
    }
    else if ((vostType.value === 'recovery') && (region.value === 'fontaine'))
    {
        for (let article of articleAll)
        { 
            if(article.classList.contains('recovery') && article.classList.contains('fontaine'))
                {article.style.display = 'block'}
        }
    }
    else if ((vostType.value === 'recovery') && (region.value === 'natlan'))
    {
        for (let article of articleAll)
        { 
            if(article.classList.contains('recovery') && article.classList.contains('natlan'))
                {article.style.display = 'block'}
        }
    }
    else if (rarity.value === 'star')
    {
    let starAll = document.querySelectorAll('.star')
    for (let star of starAll){star.style.display = 'block'}  
    }
    else if(rarity.value === 'star2') 
    {
    let starAll = document.querySelectorAll('.star2')
    for (let star of starAll){star.style.display = 'block'}
    }
    else if(rarity.value === 'star3') 
    {
    let starAll = document.querySelectorAll('.star3')
    for (let star of starAll){star.style.display = 'block'}
    }
    else if(rarity.value === 'star4') 
    {
    let starAll = document.querySelectorAll('.star4')
    for (let star of starAll){star.style.display = 'block'}
    }
    else if(vostType.value === 'recovery') 
    {
    let recoveryAll = document.querySelectorAll('.recovery')
    for (let recovery of recoveryAll){recovery.style.display = 'block'}
    }
    else if(region.value === 'mondstadt') 
    {
    let mondstadtAll = document.querySelectorAll('.mondstadt')
    for (let mondstadt of mondstadtAll){mondstadt.style.display = 'block'}
    }
    else if(region.value === 'inazuma') 
    {
    let inazumaAll = document.querySelectorAll('.inazuma')
    for (let inazuma of inazumaAll){inazuma.style.display = 'block'}
    }
    else if(region.value === 'natlan') 
    {
    let natlanAll = document.querySelectorAll('.natlan')
    for (let natlan of natlanAll){natlan.style.display = 'block'}
    }
    else if(region.value === 'fontaine') 
    {
    let fontaineAll = document.querySelectorAll('.fontaine')
    for (let fontaine of fontaineAll){fontaine.style.display = 'block'}
    }
    else if(region.value === 'sumeru') 
    {
    let sumeruAll = document.querySelectorAll('.sumeru')
    for (let sumeru of sumeruAll){sumeru.style.display = 'block'}
    }
    else if(region.value === 'li-yue') 
    {
    let liYueAll = document.querySelectorAll('.li-yue')
    for (let liYue of liYueAll){liYue.style.display = 'block'}
    }
    else{
        for (let article of articleAll){ article.style.display = 'none'}
    }
})