# React und Map

Diese Übung handelt von der Anwendung von `Array.prototype.map()` in React / JSX.

## Was Du tun wirst

Du wirst eine einfache Liste von Tieren basierend auf einer vorhandenen Datenliste rendern und grundlegende Stile hinzufügen.

### Beispiel

![](example.png)

## Aufgaben

### Aufgabe 1

- Erstelle eine neue Komponente: `AnimalList.jsx`
- `AnimalList` nimmt eine Prop namens `animals` entgegen
- Rendere `AnimalList` aus `App`
- Gib `animals` von `App` an `AnimalList` als Prop weiter
- In `AnimalList`, rendere ein `ul` Element
- In der `ul`, verwende `map`, um über alle Tiere zu iterieren
- Erstelle zuerst ein einfaches `li` und rendere den Namen des Tieres
- Teste, ob alles funktioniert und Du eine Liste von Tiernamen siehst

### Aufgabe 2

- Erstelle eine neue Komponente: `AnimalListItem.jsx`
- `AnimalListItem` nimmt eine Prop namens `name` entgegen
- Verwende die `id` eines Tieres als Schlüssel
- Rendere ein `li`, das den Namen `name` enthält
- Wenn der `name` ein Komma enthält, drucke nur den Teil vor dem Komma
    - Anstatt `<li>Badger, honey<li>` zu rendern, rendere `<li>Badger<li>`

### Aufgabe 3

- Importiere `AnimalListItem` in `AnimalList`
- Verwende `AnimalListItem` anstelle von `li` in deiner `map()`
