/**
 * @fileoverview Integração de um Front-End em React com a API do Siga (PHP)
 * @author Bruno Venancio Alves
 * @contact boteistem@gmail.com
 *
 * Copyright (c) 2024 Bruno Venancio Alves
 * 
 * Permission is granted to use, copy, modify, and distribute this software,
 * provided that this notice remains in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
 */
const progressBar = () => {
    document.querySelectorAll('.circular-progress').forEach((progressBar) => {
        let valueContainer = progressBar.querySelector('.value-container');
        let progressValue = 0;
        let progressEndValue = parseInt(valueContainer.textContent);
        let speed = 10;
        let progress = setInterval(() => {
            progressValue++;
            const selectedContrast = localStorage.getItem('current-contrast-siga');
            if (selectedContrast === 'with-contrast') {
                valueContainer.textContent = `${progressValue}%`;
                progressBar.style.background = `conic-gradient(
                    #ff0 ${progressValue * 3.6}deg,
                    var(--brand) ${progressValue * 3.6}deg
                )`;
                if (progressEndValue < 75) {
                    valueContainer.style.color = `#ff0`;
                }
            } else {
                valueContainer.textContent = `${progressValue}%`;
                progressBar.style.background = `conic-gradient(
                    var(--red) ${progressValue * 3.6}deg,
                    var(--brand) ${progressValue * 3.6}deg
                )`;
                if (progressEndValue < 75) {
                    valueContainer.style.color = `var(--red)`;
                }
            }
            if (progressValue === progressEndValue) {
                clearInterval(progress);
            }
        }, speed);
    });
}
export default progressBar;