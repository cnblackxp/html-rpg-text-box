export default class TextManager {
    constructor($element, speed = 100) {
        this.$element = $element;
        this.speed = speed;


        this._animating = false;
        this._skipClicked = false;
        this._clearAnimationDoneCallback();
        this._clearNextDialog();
    }

    _clearNextDialog() {
        this._nextDialog = function(){};
    }
    _clearAnimationDoneCallback() {
        this._doneTextAnimatingCallback = function(){};
    }

    styleElement() {
        this.$element.setAttribute('style', `
            width: 90%;
            height: 150px;
            position: absolute;
            bottom: 2.5%;
            left: 2.5%;
            background-color: #34495e;
            color: white;
            padding: 2.5%;
            font-family: Arial, Helvetica, sans-serif;
        `);
    }

    animateText(string) {
        // console.log(string);
        if (string.length > 0) {
            this._animating = true;
            setTimeout(() => {
                if (!this._skipClicked) {
                    if (string.charAt(0) === '<') {
                        const startingIndexOfClosingTag = string.indexOf('</');
                        const lastIndex = string.indexOf('>', startingIndexOfClosingTag);
                        const styledString = string.substr(0, lastIndex);
                        this.$element.innerHTML += styledString;
                        this.animateText(string.substr(lastIndex+1));
                    } else {
                        this.$element.innerHTML += string.charAt(0);
                        this.animateText(string.substr(1));
                    }
                } else {
                    this._skipClicked = false;
                    this.$element.innerHTML += string;
                    this.animateText('');
                }
            }, this.speed);
        } else {
            this._animating = false;
            this._doneTextAnimatingCallback();
        }
    }

    animateDialog(dialog) {
        if (dialog.length > 0) {
            this.$element.innerHTML = '';
            const currentDialog = this._handleStyledText(dialog.shift());
            this.animateText(currentDialog);
            this._nextDialog = () => this.animateDialog(dialog);
        } else {
            console.log('DONE');
            this.$element.innerHTML += '<br /><br />Dialog Finished!';
            this._clearAnimationDoneCallback();
            this._clearNextDialog();
            window.removeEventListener('click', this._skipDialogHandler);
        }
    }

    startDialog(dialog) {
        const clonedDialog = [...dialog];
        this.animateDialog(clonedDialog);
        window.addEventListener('click', this._skipDialogHandler);
    }

    _skipDialogHandler = () => {
        if (this.isAnimating()) {
            this._skipClicked = true;
        } else {
            console.log('skip dialog itself');
            this._nextDialog();
        }
    }

    _handleStyledText(text) {
        if (text.indexOf('<') === -1) {
            return text;
        }
        const stringsToReplace = [];
        let startingIndex = 0;
        while(true) {
            const tagIndex = text.indexOf('<', startingIndex);
            if (tagIndex === -1) {
                break;
            }
            const startingIndexOfClosingTag = text.indexOf('</', startingIndex); 
            const endingIndexOfClosingTag = text.indexOf('>', startingIndexOfClosingTag);

            startingIndex = endingIndexOfClosingTag;

            const htmlString = text.substring(tagIndex, endingIndexOfClosingTag + 1);
            const string = htmlString.split('>')[1].split('<')[0];
            const htmlTemplate = htmlString.replace(string, '{char}');
            const styledString = string.split("").map(char => htmlTemplate.replace('{char}', char)).join("");
            stringsToReplace.push([htmlString, styledString]);
        }

        stringsToReplace.forEach(strings => {
            const toReplace = strings[0];
            const replaceBy = strings[1];
            text = text.replace(toReplace, replaceBy);
        });

        return text;


    }

    isAnimating() {
        return this._animating;
    }
}