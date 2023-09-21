// Referencias HTML

const lblEscritorio = document.querySelector('h1');
const btnAtender    = document.querySelector('button');
const lblTicket     = document.querySelector('small');
const divAlerta     = document.querySelector('.alert'); 

const searchParams = new URLSearchParams( window.location.search );

if ( !searchParams.has('escritorio') ) {
    window.location = 'index.html';
    throw new Error ('El escritorio es obligatorio');

} 

const escritorio = searchParams.get('escritorio');
lblEscritorio.innerText = escritorio;

divAlerta.display = 'none';

const socket = io();

socket.on('connect', () => {

    btnAtender.disable = false;

});

socket.on('disconnect', () => {

    btnAtender.disable = true;
});

socket.on('ultimo-ticket', (ultimo) => {


});

btnAtender.addEventListener('click', () => {

    
    socket.emit('atender-ticket', { escritorio }, ({ok,ticket,msg}) => {

        if ( !ok ) {
            lblTicket.innerText = 'Nadie.';
            return divAlerta.style.display = '';
        }

        lblTicket.innerText = 'Ticket ' + ticket.numero;


    })

})