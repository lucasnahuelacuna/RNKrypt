# Krypt

Krypt es una aplicación construida en React Native que permite al usuario:

- Consultar precio actual de criptomonedas (y otra información relevante)
- Leer noticias relacionadas con la blockchain
- Obtener una lista de los exchanges más importantes

La obtención de los datos utilizados en esta aplicación proviene de dos APIs:

- Coingecko: Información referida a criptomonedas y exchanges
- Bing Search Engine: Información de noticias relacionadas a criptomonedas

## Paquetes

Se utilizaron varios paquetes para la app, entre los cuales destacamos:

- ```react-native-vector-icons```
- ```react-native-chart-kit```
- ```react-native-svg```
- ```millify```

Los paquetes ```react-native-chart-kit``` y ```react-native-svg``` fueron utilizados para la construcción de un gráfico lineal que muestra la variación del precio de una criptomoneda de los últimos 7 días.

## Ejecutar proyecto

Este proyecto utiliza React Native CLI, por lo tanto para correrlo es necesario realizar los siguientes pasos:

* Clonar repositorio
* En la raiz del proyecto ejecutar: ```npm install```
* En caso que se desee correr en **IOS** hacer:
  * ```cd ios```
  * ```pod install```
  * ```cd ..```
* Una vez realizado lo anterior, para correr la aplicación ejecutamos en la raíz del proyecto:
  * Android: ```npx react-native run-android```
  * IOS: ```npx react-native run-ios```
