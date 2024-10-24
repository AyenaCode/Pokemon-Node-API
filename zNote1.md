## Middlewares

Peuvent comminiquer entre eux

## L'ordre enst important lors de l'utilisation de plusiures middleswares

## C'est la base de donné est responsable d'ajouter un id unique

## Les donné provenant des requette HTTP (entrant API) sont en string. Il faut donc les parser en format Json.

Ex: UserString = "{"name": "Jhon", "age": "33"}" //string

UserJson = JSON.parse(UserString) . ainsi UserJson devient : {"name": "Jhon", "age": "33"} //Json

### Pour retourner les donné au client (sortatnt API), il faut faire l'inverse avec la methode JSON.stringify

JSON.srtingify({"name": "Jhon", "age": "33"}) // "{"name": "Jhon", "age": "33"}"

#### Ces mécanise seront gérer par un middleware (body-parer avec express)
