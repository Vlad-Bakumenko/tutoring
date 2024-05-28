# Sicherheit mit bcrypt 🔒🔑

Diese Aufgabe ermöglicht es Dir, mit dem `bcrypt`-Paket zu experimentieren, indem Du eine CLI-Anwendung erstellst.

## Was Du tun wirst

Du wirst mit `bcrypt` nur über die CLI arbeiten (kein Server erforderlich!).

Es wird erwartet, dass Du Deine Lösung in 2 Dateien schreibst:

1. `register.js` - generiert einen Passwort-Hash
2. `login.js` - vergleicht einen Passwort-Hash mit dem Hash vom Benutzer

## Aufgaben

### Aufgabe 1 - bcrypt bekommen

Installiere das [bcrypt](https://www.npmjs.com/package/bcrypt) npm-Paket

### Aufgabe 2 - wie man bcrypt verwendet

Lies die bcrypt [Dokumentation](https://github.com/kelektiv/node.bcrypt.js/#usage)

Beantworte die folgenden Fragen:

- Welche Methode solltest Du verwenden, um einen Hash aus einem Passwort zu erstellen?
- Welche Methode solltest Du verwenden, um ein Passwort mit einem Hash zu vergleichen?

### Aufgabe 3 - eine Hashing-Hilfsfunktion schreiben (register.js)

1. Öffne die Datei `register.js`

2. Importiere `bcrypt`

3. Schreibe eine Funktion, die einen **String** als Argument nimmt und `bcrypt.hash()` verwendet, um den Hash zu erstellen und das Ergebnis **zurückzugeben**

   > Tipp: Verwende vorerst `10` als Anzahl der Salt-Runden
   
4. Führe Deine Funktion mit der `password`-Variable als Parameter aus. Diese Variable kann von Deinem Terminal aus befüllt werden, zum Beispiel:

   ```bash
   node register.js kittens
   ```

5. Verwende `console.log()`, um die Ausgabe Deiner Funktion anzuzeigen

### Aufgabe 4 - den Hash im Dateisystem speichern

Die Datei `helpers.js` enthält die Funktion `writeToFileSystem()`

- Importiere und verwende `writeToFileSystem()`, um Deinen Hash im Dateisystem zu speichern

### Aufgabe 5 - mit Salt spielen

Spiele mit dem Wert der Salt-Runden. Verwende kleine und große Zahlen.

- Wie lange dauert es, bis das Programm ausgeführt wird?
- Was wäre eine ideale Anzahl von Salt-Runden?

### Aufgabe 6 - eine Vergleichshilfsfunktion schreiben (login.js)

1. Öffne die Datei `login.js`

2. Importiere `bcrypt`

3. Schreibe eine Funktion, die einen **password** Parameter vom Benutzer erhält

4. Die Datei `helpers.js` enthält die Funktion `readFromFileSystem()`

   - Importiere und verwende `readFromFileSystem()`, um den **Hash** aus dem Dateisystem zu lesen

5. Verwende die `bcrypt.compare()`-Methode, um die `password`-Variable mit dem **Hash** zu vergleichen

6. Wenn das Passwort:
   - **übereinstimmt**, zeige dem Benutzer eine Nachricht, dass die Passwörter übereinstimmen
   - **nicht übereinstimmt**, zeige dem Benutzer eine Nachricht, dass die Passwörter nicht übereinstimmen

### Aufgabe 7 - Testen

Teste Deinen Code.

1. Führe `node register.js {password}` aus, wobei `{password}` das Passwort ist, das Du registrieren möchtest.

2. Führe `node login.js {password}` aus, wobei `{password}` das Passwort ist, das Du gegen den Hash testen möchtest.

3. Versuche, verschiedene Passwörter zu verwenden und melde Dich mit dem falschen Passwort an, um unterschiedliche Ergebnisse zu sehen.
