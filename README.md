Griglia Campo Minato
===
L’utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

### Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

## Svolgimento
1. Creare un bottone di "start" per genererare la griglia di gioco e salvarlo in una variabile
2. Al click sul bottone, con un ciclo for creare ad ogni ciclo la singola cella e aggiungerla nella griglia
3. Creare una funzione per generare la cella quadrata:
    - creare l'elemento HTML
    - aggiungere le classi necessarie
    - associare il numero alla cella
    - aggiungere un addEventListener per far variare il colore della cella e mostrarne il numero (anche in console) al click
4. Creare una select per scegliere il livello di difficoltà e salvarne il valore in una variabile
5. A seconda del livello di difficoltà selezionato, modificare il numero totale di caselle e le dimensioni delle singole celle
