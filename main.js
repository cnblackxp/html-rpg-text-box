import TextManager from './TextManager.js';

const dialogSample1 = [
    'Et sunt aliquip proident <b style="color: red">fugiat</b> ex aute nisi minim cupidatat labore officia proident. <span style="text-decoration: line-through;">Excepteur</span> esse duis elit nisi sit veniam. Sit culpa irure nostrud ex magna do fugiat nulla.',
    'Cillum amet aliqua sunt ipsum voluptate ex in officia commodo ex ad incididunt. Cillum cillum elit quis occaecat dolor. Ad voluptate sit nulla cillum proident deserunt. Anim elit do enim sint irure non pariatur dolor incididunt labore labore. Amet in aliqua id deserunt cupidatat ipsum pariatur nulla exercitation velit.',
    'Sunt reprehenderit sunt commodo dolore ad excepteur. Sit ea proident incididunt nulla consequat ullamco dolor amet excepteur labore aute. Nostrud adipisicing nulla cillum ex sunt commodo ut nostrud ea esse et adipisicing ea.',
    'Cupidatat duis cupidatat <span style="color: cyan; font-weight: 600;">amet non aute ut qui quis. Lorem ad velit magna nostrud laborum laboris tempor esse ex sit eiusmod velit in. Qui elit reprehenderit aliqua</span> qui consequat.',
    'Occaecat ea officia qui occaecat minim consequat nisi fugiat dolor anim minim. Fugiat laboris mollit amet voluptate est laboris culpa do ea ad magna. Ullamco aliqua ipsum laborum Lorem ut veniam. Elit cupidatat eiusmod reprehenderit tempor reprehenderit ullamco id qui culpa anim. Culpa ex tempor id culpa sunt ad sint laboris ad nulla eu.Veniam enim non dolore labore do laboris nulla. Aliqua veniam laboris aliqua sint veniam culpa nostrud nostrud ad sint anim. Irure cillum qui aute cupidatat dolor eiusmod magna ipsum culpa officia aute veniam non fugiat. Enim reprehenderit enim ut amet commodo qui. Occaecat commodo commodo adipisicing nisi anim tempor consectetur dolor est culpa labore eiusmod pariatur incididunt.Id eu voluptate aliquip proident eu exercitation id. Dolor nulla ea occaecat occaecat do cupidatat veniam adipisicing Lorem pariatur dolore. Eiusmod ad amet nisi occaecat. Cupidatat nisi anim tempor nisi veniam pariatur pariatur fugiat aute. Mollit ipsum enim id quis velit eiusmod laborum.'
];


const textManager = new TextManager(document.querySelector('.rpg-text-box'), 10);
textManager.styleElement();
textManager.startDialog(dialogSample1);