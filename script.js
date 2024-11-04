

function MostraNascondi (){
    const div = document.getElementById('jumbotron');
            
    if (div.classList.contains('open')) {
        div.style.maxHeight = '0';
        div.classList.remove('open');
    } else {
        div.style.maxHeight = div.scrollHeight + 'px';
        div.classList.add('open');
    }
    }

    function MostraNascondi2 (){
        const div = document.getElementById('OffSett');
        if (div.classList.contains('open')) {
            div.style.maxHeight = '0';
            div.classList.remove('open');
        } else {
            div.style.maxHeight = div.scrollHeight + 'px';
            div.classList.add('open');
        }
    }
        
        function MostraNascondi3 (){
            const div = document.getElementById('WelSummer');
            
            if (div.classList.contains('open')) {
                div.style.maxHeight = '0';
                div.classList.remove('open');
            } else {
                div.style.maxHeight = div.scrollHeight + 'px';
                div.classList.add('open');
            }
        }
        function rimuoviTutteLeCard() {
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => card.remove());
        }
 