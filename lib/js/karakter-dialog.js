(function() {

    const css = `
        @keyframes karakters-bounce-pop {
            0% {
                transform: translateY(45px) scale3d(1, 1, 1);
                animation-timing-function: ease-in;
            }
            25% {
                transform: translateY(0px) scale3d(1, 1, 1);
                animation-timing-function: ease-out;
            }
            30% {
                transform: translateY(0px) scale3d(1.25, 0.75, 1);
            }
            40% {
                transform: translateY(24px) scale3d(0.75, 1.25, 1);
                animation-timing-function: ease-in;
            }
            55% {
                transform: translateY(0px) scale3d(1.15, 0.85, 1);
                animation-timing-function: ease-out;
            }
            65% {
                transform: translateY(12px) scale3d(0.95, 1.05, 1);
                animation-timing-function: ease-in;
            }
            75% {
                transform: translateY(0px) scale3d(1.05, 0.95, 1);
                animation-timing-function: ease-out;
            }
            90% {
                transform: translateY(4px) scale3d(1, 1, 1);
                animation-timing-function: ease-in;
            }
            100% {
                transform: translateY(0px) scale3d(1, 1, 1);
                animation-timing-function: ease-out;
            }
        }

        #karakterDialogWrapper .character-shake {
            animation: karakters-bounce-pop 1s cubic-bezier(0.55, 0, 1, 0.45) forwards; 
        }


        
        #karakterDialogWrapper {
            --theme-bg: #ffffff;
            --theme-text: #222222;
            --theme-border-color: #000000;
            --theme-border: 1px solid var(--theme-border-color);
            
            font-size: 1rem;
            color: var(--theme-text);
        }

        #karakterDialogWrapper * {
            box-sizing: border-box;
            font-family: inherit;
            border-radius: 0 !important;
            box-shadow: none !important;
        }

        #karakterDialogWrapper .btn {
            font-size: 0.9em;
            padding: 0.5rem 0.8rem;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            margin: 2px;
            border: var(--theme-border) !important;
            background: var(--theme-bg) !important;
            color: var(--theme-text) !important;
            transition: background-color 0.2s;
        }
        #karakterDialogWrapper .btn:hover {
           background: #eee !important;
        }
        #karakterDialogWrapper .btn:active {
            transform: translateY(1px);
        }
        
        #karakterDialogWrapper .btn-sm {
            font-size: 0.8em !important;
            padding: 0.4rem 0.6rem !important;
        }

        #karakterDialogWrapper .btn-primary {
            background-color: #000 !important;
            border-color: #000 !important;
            color: #fff !important;
        }
        #karakterDialogWrapper .btn-primary:hover {
            background-color: #333 !important;
            border-color: #333 !important;
        }
        #karakterDialogWrapper .btn-secondary {
            background-color: #6c757d !important;
            border-color: #6c757d !important;
            color: white !important;
        }
         #karakterDialogWrapper .btn-secondary:hover {
            background-color: #5a6268 !important;
            border-color: #545b62 !important;
        }
        #karakterDialogWrapper .btn-outline-dark {
             border-color: var(--theme-border-color) !important;
             color: var(--theme-text) !important;
             background: transparent !important;
        }
        #karakterDialogWrapper .btn-outline-dark:hover {
             background: #eee !important;
        }

        #karakterDialogWrapper .form-control {
            border: var(--theme-border) !important;
            background: var(--theme-bg) !important;
            color: var(--theme-text) !important;
            font-size: 0.9em;
            padding: 0.5rem 0.8rem;
            width: 100%;
            display: block;
        }
        #karakterDialogWrapper .form-control:focus {
            outline: none !important;
            box-shadow: 0 0 0 3px rgba(0,0,0,0.25) !important;
        }

        #karakterDialogWrapper .mt-3 {
            margin-top: 1rem !important;
        }

        #karakterDialogWrapper .character-container {
            position: fixed; top: 80%; left: 0; right: 0; bottom: 0;
            display: flex; justify-content: center; align-items: center;
            z-index: 1110; opacity: 0; transition: opacity 0.8s ease-in-out;
            pointer-events: none;
        }
        #karakterDialogWrapper .character-sprite {
            height: 600px; width: auto; 
            image-rendering: pixelated; 
            mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
            -webkit-mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
            transition: opacity 0.3s ease-in-out, height 0.3s ease-in-out;
        }
        #karakterDialogWrapper .dialog-container {
            position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
            width: 90%; max-width: 800px; background-color: var(--theme-bg);
            padding: 15px; display: flex; align-items: center; 
            cursor: pointer; z-index: 1120; opacity: 0; transition: opacity 0.3s ease-in-out;
            border: var(--theme-border) !important;
            pointer-events: none;
        }
        #karakterDialogWrapper .dialog-avatar img {
            width: 85px; height: 85px; 
            image-rendering: pixelated; 
            border: var(--theme-border) !important;
            background-color: orange; 
            transition: width 0.3s ease-in-out, height 0.3s ease-in-out;
        }
        #karakterDialogWrapper .dialog-content { 
            margin-left: 20px; color: var(--theme-text); 
            font-size: 1em; line-height: 1.6; width: 100%; 
            transition: margin-left 0.3s ease-in-out;
        }
        #karakterDialogWrapper .dialog-content p { margin:0; }
        #karakterDialogWrapper #karakterDialogTitle {
            font-size: 1.2em;
            font-weight: 600;
            color: #111;
            margin-bottom: 5px; display: none;
        }
        #karakterDialogWrapper #karakterDialogOptions { margin-top: 10px; display: flex; gap: 10px; flex-wrap: wrap; }
        
        #karakterDialogWrapper #karakterDialogNextArrow {
            display: none; position: absolute; bottom: 10px; right: 15px;
            width: 0; height: 0; border-left: 10px solid transparent;
            border-right: 10px solid transparent; border-top: 10px solid var(--theme-border-color);
            animation: karakters-dialog-bounce 0.7s infinite;
        }
        @keyframes karakters-dialog-bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
        }
        #karakterDialogWrapper #karakterDialogBlurLayer {
            position: fixed; inset: 0; 
            background: rgba(0, 0, 0, 0.5); 
            transition: 0.4s; opacity: 0;
            pointer-events: none; z-index: 1100;
        }
        #karakterDialogWrapper #karakterDialogHelpFormContainer, 
        #karakterDialogWrapper #karakterPromptContainer {
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            display: none; justify-content: center; align-items: center;
            z-index: 1130; opacity: 0; transition: opacity 0.3s ease-in-out;
            pointer-events: none;
        }
        #karakterDialogWrapper #karakterDialogHelpForm, 
        #karakterDialogWrapper #karakterPromptForm {
            background: var(--theme-bg); padding: 25px; 
            width: 90%; max-width: 500px;
            border: var(--theme-border) !important;
        }
        #karakterDialogWrapper #karakterDialogHelpForm label { 
            font-size: 0.9em; margin-top: 10px; margin-bottom: 5px; display: block; 
            color: #555;
        }
        #karakterDialogWrapper #karakterDialogHelpForm h5,
        #karakterDialogWrapper #karakterPromptForm h5 { 
            margin-bottom: 15px; font-size: 1.2em; color: #111; font-weight: 600;
        }

        @media (max-width: 576px) {
            #karakterDialogWrapper {
                font-size: 0.9rem;
            }
            #karakterDialogWrapper .character-sprite {
                height: 350px;
            }
            #karakterDialogWrapper .dialog-avatar img {
                width: 65px;
                height: 65px;
            }
            #karakterDialogWrapper .dialog-content {
                margin-left: 10px;
            }
            #karakterDialogWrapper .dialog-container {
                padding: 10px;
                width: 95%;
                bottom: 10px;
            }
        }
    `;
    const styleElement = document.createElement('style');
    styleElement.innerHTML = css;
    document.head.appendChild(styleElement);

    const html = `
    <div id="karakterDialogWrapper">
        <div id="karakterDialogBlurLayer"></div>
        <div class="character-container" id="karakterDialogCharacter">
            <img src="" class="character-sprite" id="karakterDialogSprite">
        </div>
        <div class="dialog-container" id="karakterDialogBox">
            <div class="dialog-avatar">
                <img src="" id="karakterDialogAvatar">
            </div>
            <div class="dialog-content">
                <h5 id="karakterDialogTitle"></h5>
                <p id="karakterDialogText"></p>
                <div id="karakterDialogOptions"></div>
            </div>
            <div id="karakterDialogNextArrow"></div>
        </div>
        <div id="karakterDialogHelpFormContainer">
            <form id="karakterDialogHelpForm">
                <h5>Ada yang bisa dibantu?</h5>
                <label for="karakterFormName">Siapa namamu sobat?</label>
                <input type="text" class="form-control" id="karakterFormName" required>
                <label for="karakterFormMessage">Apa yang kamu butuhkan?</label>
                <textarea class="form-control" id="karakterFormMessage" rows="3" required></textarea>
                <div class="mt-3">
                    <button type="submit" class="btn btn-primary">Kirim</button>
                    <button type="button" class="btn btn-secondary" id="karakterFormCancel">Batal</button>
                </div>
            </form>
        </div>
        <div id="karakterPromptContainer">
            <form id="karakterPromptForm">
                <h5 id="karakterPromptTitle"></h5>
                <input type="text" class="form-control" id="karakterPromptInput" required>
                <div class="mt-3">
                    <button type="submit" class="btn btn-primary">OK</button>
                    <button type="button" class="btn btn-secondary" id="karakterPromptCancel">Batal</button>
                </div>
            </form>
        </div>
        <audio id="karakterDialogSound" src=""></audio>
        <audio id="karakterDialogSFX" src=""></audio>
    </div>
    `;
    document.body.insertAdjacentHTML('beforeend', html);

    let config = {};
    let activeScript = [];
    let currentDialogIndex = 0;
    let isMainDialogActive = false;
    let currentUserName = '';
    let isTyping = false;
    let currentTimeout;
    let idleTimer;
    let isInitialized = false;
    let currentPromptResolver = null;
    let currentDialogResolver = null;
    const expressionRegex = / \{([^}:]+)(?::([^}]+))?\}$/;

    const elements = {
        pageContent: null,
        blurLayer: document.getElementById("karakterDialogBlurLayer"),
        dialogText: document.getElementById('karakterDialogText'),
        dialogTitle: document.getElementById('karakterDialogTitle'),
        dialogBox: document.getElementById('karakterDialogBox'),
        dialogOptions: document.getElementById('karakterDialogOptions'),
        character: document.getElementById('karakterDialogCharacter'),
        characterSprite: document.getElementById('karakterDialogSprite'),
        nextArrow: document.getElementById('karakterDialogNextArrow'),
        dialogAvatar: document.getElementById('karakterDialogAvatar'),
        helpFormContainer: document.getElementById('karakterDialogHelpFormContainer'),
        helpForm: document.getElementById('karakterDialogHelpForm'),
        cancelForm: document.getElementById('karakterFormCancel'),
        promptContainer: document.getElementById('karakterPromptContainer'),
        promptForm: document.getElementById('karakterPromptForm'),
        promptTitle: document.getElementById('karakterPromptTitle'),
        promptInput: document.getElementById('karakterPromptInput'),
        promptCancel: document.getElementById('karakterPromptCancel'),
        typeSound: document.getElementById('karakterDialogSound'),
        formName: document.getElementById('karakterFormName'),
        formMessage: document.getElementById('karakterFormMessage'),
        sfxSound: document.getElementById('karakterDialogSFX')
    };

    function parseDialogLine(line) {
        if (typeof line !== 'string') return { text: line, expression: null, sound: null };
        const match = line.match(expressionRegex);
        if (match) {
            const expression = match[1]; 
            const sound = match[2] || null; 
            const text = line.substring(0, match.index);
            return { text: text, expression: expression, sound: sound };
        }
        return { text: line, expression: null, sound: null };
    }

    function setCharacterExpression(expressionKey) {
        if (config.characterSprites && config.characterSprites.hasOwnProperty(expressionKey)) {
            elements.characterSprite.src = config.characterSprites[expressionKey];
        } else if (config.characterSprites && config.characterSprites['default']) {
            elements.characterSprite.src = config.characterSprites['default'];
        }
    }

    function isDialogActive() {
        return elements.character.style.opacity === '1' || 
               elements.dialogBox.style.opacity === '1' || 
               elements.helpFormContainer.style.opacity === '1' ||
               elements.promptContainer.style.opacity === '1';
    }

    function startSequence() {
        if (elements.pageContent) {
            elements.blurLayer.style.opacity = '1';
            elements.blurLayer.style.pointerEvents = 'auto';
            elements.pageContent.classList.add("blur");
        }
        elements.character.style.opacity = '1';
        elements.character.style.pointerEvents = 'auto';
        elements.character.classList.add('character-shake'); 
        setTimeout(() => {
            elements.dialogBox.style.opacity = '1';
            elements.dialogBox.style.pointerEvents = 'auto';
            updateDialog();
        }, config.dialogStartDelay);
    }

    function showNextArrow() {
        if (elements.dialogOptions.children.length === 0 && !isTyping && elements.dialogBox.style.opacity === '1') {
            elements.nextArrow.style.display = 'block';
        }
    }

    function hideNextArrow() {
        elements.nextArrow.style.display = 'none';
    }

    function clearOptions() {
        elements.dialogOptions.innerHTML = '';
    }

    function closeDialog() {
        hideNextArrow();
        elements.dialogTitle.style.display = 'none';
        elements.dialogBox.style.opacity = '0';
        elements.dialogBox.style.pointerEvents = 'none';
        elements.character.style.opacity = '0';
        elements.character.style.pointerEvents = 'none';
        elements.blurLayer.style.opacity = '0';
        elements.blurLayer.style.pointerEvents = 'none';
        if (elements.pageContent) {
            elements.pageContent.classList.remove("blur");
        }
        
        const resolver = currentDialogResolver;
        currentDialogResolver = null;

        setTimeout(() => {
            clearOptions();
            activeScript = [];
            currentDialogIndex = 0;
            isMainDialogActive = false;
            currentUserName = '';
            if (config.avatarGifs) {
                elements.dialogAvatar.src = config.avatarGifs['default'];
            }
            setCharacterExpression('default');
            
            if (resolver) {
                resolver();
            }
        }, 300); 
    }

    function showHelpForm() {
        elements.helpFormContainer.style.display = 'flex';
        elements.helpFormContainer.style.pointerEvents = 'auto';
        setTimeout(() => {
            elements.helpFormContainer.style.opacity = '1';
            elements.blurLayer.style.opacity = '1';
            elements.blurLayer.style.pointerEvents = 'auto';
            if (elements.pageContent) elements.pageContent.classList.add("blur");
        }, 10);
        elements.dialogBox.style.opacity = '0';
        elements.dialogBox.style.pointerEvents = 'none';
    }

    function hideHelpForm() {
        elements.helpFormContainer.style.opacity = '0';
        elements.helpFormContainer.style.pointerEvents = 'none';
        setTimeout(() => {
            elements.helpFormContainer.style.display = 'none';
            elements.helpForm.reset();
        }, 300);
    }

    function closePrompt() {
        return new Promise((resolve) => {
            elements.promptContainer.style.opacity = '0';
            elements.promptContainer.style.pointerEvents = 'none';
            elements.character.style.opacity = '0';
            elements.character.style.pointerEvents = 'none';
            elements.blurLayer.style.opacity = '0';
            elements.blurLayer.style.pointerEvents = 'none';
            if (elements.pageContent) {
                elements.pageContent.classList.remove("blur");
            }
            setCharacterExpression('default');

            setTimeout(() => {
                elements.promptContainer.style.display = 'none';
                elements.promptForm.reset();
                resolve(); 
            }, 300);
        });
    }

    function renderOptions(optionsArray) {
        hideNextArrow();
        clearOptions();
        optionsArray.forEach(option => {
            let buttonClass = 'btn btn-sm btn-outline-dark';
            if (option.text === "OK") buttonClass = 'btn btn-sm btn-primary';

            const button = document.createElement('button');
            button.type = 'button';
            button.className = buttonClass;
            button.textContent = option.text;
            button.onclick = (e) => {
                e.stopPropagation();
                if (option.exp) {
                    setCharacterExpression(option.exp);
                }
                activeScript = option.nextScript;
                currentDialogIndex = 0;
                updateDialog();
            };
            elements.dialogOptions.appendChild(button);
        });
    }

    function typeWriter(text) {
        hideNextArrow();
        isTyping = true;
        let processedText = text.replace('{namauser}', currentUserName);
        elements.dialogText.textContent = '';
        let charIndex = 0;

        function typeChar() {
            if (charIndex < processedText.length) {
                elements.dialogText.textContent += processedText.charAt(charIndex);
                elements.typeSound.currentTime = 0; 
                elements.typeSound.play().catch(() => {});
                charIndex++;
                currentTimeout = setTimeout(typeChar, config.typeSpeed);
            } else {
                isTyping = false;
                if (isMainDialogActive) {
                    checkDialogLogic();
                } else {
                    showNextArrow();
                }
            }
        }
        typeChar();
    }

    function checkDialogLogic() {
        if (isTyping) return;
        let nextIndex = currentDialogIndex + 1;
        if (nextIndex < activeScript.length) {
            let nextLine = activeScript[nextIndex];
            if (nextLine.startsWith("SHOW_OPTIONS:") || nextLine === "SHOW_FORM" || nextLine === "CLOSE_DIALOG") {
                currentDialogIndex++;
                updateDialog();
                return;
            }
        }
        showNextArrow();
    }
function updateDialog() {
    hideNextArrow();
    
    elements.character.classList.remove('character-shake');
    
    if (currentDialogIndex < activeScript.length) {
        clearTimeout(currentTimeout);
        clearOptions();
        let currentLine = activeScript[currentDialogIndex];

        if (currentLine === "CLOSE_DIALOG") {
            closeDialog();
            isTyping = false;
            return;
        }
        if (isMainDialogActive) {
            if (currentLine.startsWith("SHOW_OPTIONS:")) {
                if (config.dialogOptionsData && config.dialogOptionsData[currentLine.split(':')[1]]) {
                     renderOptions(config.dialogOptionsData[currentLine.split(':')[1]]);
                } else {
                    console.error(`KarakterDialog: Pilihan dialog "${currentLine.split(':')[1]}" tidak ditemukan.`);
                    closeDialog();
                }
                isTyping = false;
                return;
            } else if (currentLine === "SHOW_FORM") {
                showHelpForm();
                isTyping = false;
                return;
            }
        }
        
        const parsedLine = parseDialogLine(currentLine);

        if (parsedLine.sound && config.sfxMap && config.sfxMap[parsedLine.sound]) {
            elements.sfxSound.src = config.sfxMap[parsedLine.sound];
            elements.sfxSound.currentTime = 0;
            elements.sfxSound.play().catch(() => {});
        }
        
        if (parsedLine.expression) {
            setCharacterExpression(parsedLine.expression);
            
            if (elements.character.style.opacity === '1') {
                elements.character.classList.add('character-shake');
                
                setTimeout(() => {
                    elements.character.classList.remove('character-shake');
                }, 500); 
            }
        }
        
        typeWriter(parsedLine.text);
    } else {
        closeDialog();
    }
}


    function showIdleDialog() {
        if (isDialogActive()) return;
        const randomLine = config.idleDialogScript[Math.floor(Math.random() * config.idleDialogScript.length)];
        publicAPI.dialog(randomLine);
    }

    function resetIdleTimer() {
        clearTimeout(idleTimer);
        if (!isDialogActive() && config.idleTimeout > 0) {
            idleTimer = setTimeout(showIdleDialog, config.idleTimeout);
        }
    }

    const publicAPI = {
                dialog: function(...messages) {
            if (!isInitialized) publicAPI.init({});
            
            if (isDialogActive()) {
                console.warn("KarakterDialog: Mencoba membuka dialog saat dialog lain masih aktif.");
                return Promise.resolve(); 
            }
            
            let scriptMessages = messages.filter(arg => typeof arg === 'string');
            if (scriptMessages.length === 0) {
                return Promise.resolve(); 
            }
            
            elements.dialogAvatar.src = config.avatarGifs['default'];
            const firstLineParsed = parseDialogLine(scriptMessages[0]);
            setCharacterExpression(firstLineParsed.expression || 'biasah');
            activeScript = scriptMessages;
            currentDialogIndex = 0;
            
            const hasInteractiveCommand = scriptMessages.some(line => 
                typeof line === 'string' && (line.startsWith("SHOW_OPTIONS:") || line.startsWith("SHOW_FORM"))
            );
            isMainDialogActive = hasInteractiveCommand;
            
            startSequence(); 

            return new Promise((resolve) => {
                currentDialogResolver = resolve;
            });
        },


        dialog2: function(iconOrExpression = 'info', title = '', text = '') {
            if (!isInitialized) publicAPI.init({});
            
            if (isDialogActive()) {
                console.warn("KarakterDialog: Mencoba membuka dialog2 saat dialog lain masih aktif.");
                return Promise.resolve();
            }

            let expressionKey = 'biasah';
            let avatarKey = 'default';

            if (config.characterSprites.hasOwnProperty(iconOrExpression)) {
                expressionKey = iconOrExpression;
                avatarKey = 'default';
            } 
            else if (config.iconToExpressionMap.hasOwnProperty(iconOrExpression)) {
                expressionKey = config.iconToExpressionMap[iconOrExpression];
                avatarKey = iconOrExpression;
            }
            else if (config.iconToExpressionMap) {
                expressionKey = config.iconToExpressionMap['default'];
                avatarKey = 'default';
            }

            setCharacterExpression(expressionKey);
            elements.dialogAvatar.src = config.avatarGifs[avatarKey] || config.avatarGifs['default'];
            
            if (title) {
                elements.dialogTitle.textContent = title;
                elements.dialogTitle.style.display = 'block';
            }
            
            const parsedText = parseDialogLine(text);
            
            let optionsKey = 'swal_ok';
            if (arguments.length > 3 && arguments[3]) {
                 const buttonText = arguments[3];
                 if (!config.dialogOptionsData) config.dialogOptionsData = {};
                 config.dialogOptionsData['custom_ok'] = [
                     { text: buttonText, exp: 'biasah', nextScript: ["CLOSE_DIALOG"] }
                 ];
                 optionsKey = 'custom_ok';
            }

            activeScript = [parsedText.text, `SHOW_OPTIONS:${optionsKey}`];
            currentDialogIndex = 0;
            isMainDialogActive = true;
            
            startSequence();

            return new Promise((resolve) => {
                currentDialogResolver = resolve;
            });
        },

        promptDialog: function(text, expression = 'tanya') {
            if (!isInitialized) publicAPI.init({});
            
            if (isDialogActive()) {
                console.warn("KarakterDialog: Mencoba membuka prompt saat dialog lain masih aktif.");
                return Promise.resolve(null);
            }
            
            if (elements.dialogBox.style.opacity === '1') {
                closeDialog(); 
            }
            
            if (elements.pageContent) {
                elements.blurLayer.style.opacity = '1';
                elements.blurLayer.style.pointerEvents = 'auto';
                elements.pageContent.classList.add("blur");
            }
            setCharacterExpression(expression);
            elements.character.style.opacity = '1';
            elements.character.style.pointerEvents = 'auto';

            elements.promptTitle.textContent = text || "Masukkan input:";
            elements.promptInput.value = ''; 
            elements.promptContainer.style.display = 'flex';
            elements.promptContainer.style.pointerEvents = 'auto';
            setTimeout(() => {
                elements.promptContainer.style.opacity = '1';
                elements.promptInput.focus();
            }, 10);

            return new Promise((resolve) => {
                currentPromptResolver = resolve;
            });
        },

        init: function(userConfig = {}) {
            if (isInitialized) return;

            const defaultConfig = {
                pageContentId: 'pageContent',
                storyButtonSelector: '[data-story]',
                trapButtonSelector: null,
                soundBip: '/sound/bip.mp3',
                typeSpeed: 50,
                dialogStartDelay: 500,
                idleTimeout: 0,
                onFormSubmit: null,
                
                characterSprites: window.userCharacterSprites || defaultCharacterSprites,
                avatarGifs: window.userAvatarGifs || defaultAvatarGifs,
                sfxMap: window.userSfxMap || defaultSfxMap,
                iconToExpressionMap: window.userIconMap || defaultIconMap,
                
                dialogOptionsData: {
                    'swal_ok': [
                        { text: "OK", exp: 'biasah', nextScript: ["CLOSE_DIALOG"] }
                    ]
                },
                storyScripts: window.userStoryScripts || {},
                trapDialogScript: window.userTrapScript || [],
                idleDialogScript: window.userIdleScript || [],
                contextDialogScript: window.userContextScript || [],
            };

            config = {
                ...defaultConfig,
                ...userConfig,
                dialogOptionsData: {
                    ...defaultConfig.dialogOptionsData,
                    ...(userConfig.dialogOptionsData || (window.userDialogOptions || {}))
                }
            };
            
            elements.pageContent = document.getElementById(config.pageContentId);
            if (!elements.pageContent && config.pageContentId === 'pageContent') {
                console.warn(`KarakterDialog: Elemen #${config.pageContentId} tidak ditemukan. Membungkus <body> secara otomatis.`);
                const wrapper = document.createElement('div');
                wrapper.id = config.pageContentId;
                
                let nodesToMove = [];
                document.body.childNodes.forEach(node => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        if (node.tagName !== 'SCRIPT' && node.id !== 'karakterDialogBlurLayer' && !node.classList.contains('character-container') && !node.classList.contains('dialog-container') && node.id !== 'karakterDialogHelpFormContainer' && node.id !== 'karakterPromptContainer' && node.id !== 'karakterDialogWrapper') {
                            nodesToMove.push(node);
                        }
                    } else if (node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0) {
                         nodesToMove.push(node);
                    }
                });
                
                nodesToMove.forEach(node => wrapper.appendChild(node));
                document.body.prepend(wrapper);
                elements.pageContent = wrapper;
            }

            elements.typeSound.src = config.soundBip;
            setCharacterExpression('default');

            document.addEventListener('click', () => {
                resetIdleTimer();
                if (elements.dialogBox.style.opacity !== '1') return;
                if (elements.dialogOptions.children.length > 0) return;
                if (isTyping) {
                    clearTimeout(currentTimeout);
                    isTyping = false;
                    const parsedLine = parseDialogLine(activeScript[currentDialogIndex]);
                    let currentLine = parsedLine.text.replace('{namauser}', currentUserName);
                    elements.dialogText.textContent = currentLine;
                    if (isMainDialogActive) {
                        checkDialogLogic();
                    } else {
                        showNextArrow();
                    }
                } else {
                    hideNextArrow();
                    currentDialogIndex++;
                    updateDialog();
                }
            });

            document.addEventListener('contextmenu', (e) => {
                if (!config.contextDialogScript || config.contextDialogScript.length === 0) return;
                e.preventDefault();
                resetIdleTimer();
                if (isDialogActive()) return;
                const randomLine = config.contextDialogScript[Math.floor(Math.random() * config.contextDialogScript.length)];
                publicAPI.dialog(randomLine);
            });

            document.addEventListener('mousemove', resetIdleTimer);
            document.addEventListener('keypress', resetIdleTimer);
            document.addEventListener('scroll', resetIdleTimer);

            if (config.storyButtonSelector) {
                const storyButtons = document.querySelectorAll(config.storyButtonSelector);
                storyButtons.forEach(button => {
                    button.addEventListener('click', (e) => {
                        e.stopPropagation();
                        if (isDialogActive()) return;
                        
                        const scriptName = button.dataset.story;
                        if (!config.storyScripts[scriptName]) {
                            console.error(`Story script "${scriptName}" not found in config.`);
                            return;
                        }

                        isMainDialogActive = true;
                        
                        new Promise((resolve) => {
                            elements.dialogAvatar.src = config.avatarGifs['default'];
                            activeScript = config.storyScripts[scriptName];
                            const firstLineParsed = parseDialogLine(activeScript[0]);
                            setCharacterExpression(firstLineParsed.expression || 'kecewa');
                            currentDialogIndex = 0;
                            startSequence();
                            currentDialogResolver = resolve;
                        });
                    });
                });
            }

            if (config.trapButtonSelector) {
                const trapButtons = document.querySelectorAll(config.trapButtonSelector);
                trapButtons.forEach(button => {
                    button.addEventListener('click', (e) => {
                        e.stopPropagation();
                        if (isDialogActive()) return;
                        publicAPI.dialog(...config.trapDialogScript);
                    });
                });
            }

            elements.helpForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const nama = elements.formName.value;
                const pesan = elements.formMessage.value;
                currentUserName = nama;
                
                if (config.onFormSubmit) {
                    config.onFormSubmit(nama, pesan);
                } else {
                    console.log("Form Terkirim:", { nama, pesan });
                }

                hideHelpForm();
                
                let afterSubmitScript = [
                    `Baiklah ${nama}, saya akan mengirimkan surat ini kepada tuan saya dengan isi "${pesan}" {kagum}`,
                    "Ada yang mau di tanyakan lagi ? {nekosenyum}",
                    "SHOW_OPTIONS:after_submit"
                ];
                
                if (!config.dialogOptionsData || !config.dialogOptionsData['after_submit']) {
                     afterSubmitScript = [
                        `Baiklah ${nama}, terimakasih atas masukkannya! {kagum}`,
                        "CLOSE_DIALOG"
                    ];
                }

                new Promise((resolve) => {
                    setCharacterExpression('kagum');
                    elements.dialogAvatar.src = config.avatarGifs['success'] || config.avatarGifs['default'];
                    activeScript = afterSubmitScript;
                    currentDialogIndex = 0;
                    isMainDialogActive = true;
                    elements.dialogBox.style.opacity = '1';
                    elements.dialogBox.style.pointerEvents = 'auto';
                    updateDialog();
                    currentDialogResolver = resolve;
                });
            });

            elements.cancelForm.addEventListener('click', () => {
                hideHelpForm();
                closeDialog();
            });

            elements.promptForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                if (currentPromptResolver) {
                    const value = elements.promptInput.value;
                    const resolver = currentPromptResolver;
                    currentPromptResolver = null; 
                    
                    await closePrompt(); 
                    
                    resolver(value);
                }
            });

            elements.promptCancel.addEventListener('click', async () => {
                if (currentPromptResolver) {
                    const resolver = currentPromptResolver;
                    currentPromptResolver = null; 
                    
                    await closePrompt(); 
                    
                    resolver(null);
                }
            });

                        if (config.idleTimeout > 0) {
                resetIdleTimer();
            }
            
            isInitialized = true;
        }
    };

    
    window.KarakterDialog = publicAPI;
    
    if (typeof window.dialog === 'undefined') {
        window.dialog = publicAPI.dialog;
    }
    if (typeof window.dialog2 === 'undefined') {
        window.dialog2 = publicAPI.dialog2;
    }
    if (typeof window.promptDialog === 'undefined') {
        window.promptDialog = publicAPI.promptDialog;
    }
    if (typeof window.prompDialog === 'undefined') {
        window.prompDialog = publicAPI.promptDialog;
    }
    
})();
