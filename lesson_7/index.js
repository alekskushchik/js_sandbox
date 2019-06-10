import Color from './color';

class MiniSlider {
    constructor(id = 'slider') {
        this.id = document.getElementById(id);
        this.slide = 0;
        this.hideAll();
        this.show(this.slide);
        this.createButtons();

        document.getElementById('nextButton').addEventListener('click',this.next.bind(this));
        document.getElementById('prevButton').addEventListener('click',this.prev.bind(this));
    }

    hideAll() {
        for (let i = 0; i < this.id.childElementCount; i += 1) {
            this.id.children[i].style.display = 'none';
        }
    }

    show(n){
        this.hideAll();
        this.id.children[n].style.display = 'block';
        this.id.children[n].style.animation = 'change 2s ease-in-out';
    }

    createButtons(){
        this.id.parentElement.style.position = 'relative';
        const prevButton = document.createElement('button');
        prevButton.id = 'prevButton';
        prevButton.className = 'button';
        prevButton.innerHTML = '<--';
        prevButton.style.position = 'absolute';
        prevButton.style.top = '0';
        prevButton.style.left = '0';

        const nextButton = document.createElement('button');
        nextButton.id = 'nextButton';
        nextButton.className = 'button';
        nextButton.innerHTML = '-->';
        nextButton.style.position = 'absolute';
        nextButton.style.top = '0';
        nextButton.style.right = '0';

        this.id.parentElement.appendChild(prevButton);
        this.id.parentElement.appendChild(nextButton);
    }

    next(){
        this.slide +=1;
        if(this.slide > this.id.childElementCount-1) this.slide = 0;
        this.show(this.slide);

        document.getElementById('nextButton').style.borderColor = `${new Color().random().toString()}`;
    }

    prev(){
        this.slide -=1;
        if(this.slide < 0) this.slide = this.id.childElementCount-1;
        this.show(this.slide);

        document.getElementById('prevButton').style.borderColor = `${new Color().random().toString()}`;
    }

    destroy(){
        this.id.parentElement.removeChild(document.getElementById('nextButton'));
        this.id.parentElement.removeChild(document.getElementById('prevButton'));
        this.id.parentElement.removeAttribute('style')
    }
}