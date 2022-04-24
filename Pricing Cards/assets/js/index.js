        function selectCard(id,btn_id){
            let cards = document.getElementsByClassName("card");
            let buttons = document.getElementsByClassName("purchase");
            let i = 0;
            for(null;i<cards.length;i++){
                if(cards[i].id == id){
                    cards[i].classList.add("selected_card");
                    continue;
                }
                cards[i].classList.remove("selected_card");
            }
            i = 0;
            for(null;i<buttons.length;i++){
                if(buttons[i].id == btn_id){
                    buttons[i].classList.add("selected_btn");
                    continue;
                }
                buttons[i].classList.remove("selected_btn");
            }
        }
        selectCard(1);
    