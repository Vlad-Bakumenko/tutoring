# Erstellung einer Benutzerprofil-Anzeige mit bedingter Darstellung

Diese Übung hilft dir, Props zu verstehen und zu verwenden, um Daten von übergeordneten zu untergeordneten Komponenten zu übergeben und die Darstellung basierend auf diesen Props zu steuern.

## Was Du tun wirst

Du wirst eine einfache "Benutzerprofil"-Anzeige erstellen. Die Anzeige zeigt Informationen über einen Benutzer: seinen Namen, sein Alter und seinen Wohnort.

## Aufgaben

### Aufgabe 1: Erstelle die UserProfile-Komponente

Erstelle eine `UserProfile`-Komponente, die `name`, `age` und `location` als Props akzeptiert. Sie sollte den Namen und das Alter des Benutzers anzeigen.

### Aufgabe 2: Implementiere bedingte Darstellung

Verwende in der `UserProfile`-Komponente bedingte Darstellung, um;

- den Standort anzuzeigen, wenn die `location` Prop übergeben wurde
- den String `"Location Unknown"` anzuzeigen, wenn die `location` Prop **nicht** übergeben wurde

### Aufgabe 3: Ändere die App-Komponente

Die `App`-Komponente ist deine Hauptkomponente. Rendere innerhalb dieser Komponente die `UserProfile`-Komponente mindestens zweimal und übergebe die erforderlichen Props.

Beispielausgabe:

![Demo](./demo.png)

## Bonusaufgabe

Erweitere die Funktionalität deiner Anwendung, indem du die Details aller Benutzer im folgenden Array ausgibst (verwende `Array.prototype.map()`):

```js
[
  {"name":"Nelle Allardyce","age":40},
  {"name":"Godard Gercken","age":51},
  {"name":"Afton Nelle","age":118,"location":"Bukui"},
  {"name":"Delilah Lumm","age":70},
  {"name":"Magdaia Tufts","age":37,"location":"Bintawan"},
  {"name":"Meghann Bettenson","age":20,"location":"Néma"},
  {"name":"Amalia Every","age":42,"location":"Kaberamaido"},
  {"name":"Clywd Sarten","age":85,"location":"Fukadale"},
  {"name":"Lorilee Junkinson","age":55,"location":"Huangdi"},
  {"name":"Lexi Durnell","age":112,"location":"Stobreč"}
]
```

## Viel Spaß beim Programmieren!
