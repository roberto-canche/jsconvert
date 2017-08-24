# Js Convert

Es un idioma inventado para el curso de fundamentos de javascript

## Descripcion del idioma

- Si la palabra termina con "ar", se le quitan esas dos letras
- Si la palabra inicia con Z, se le añade "pe" al final
- Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio
- Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas

## Instalación

```
npm install jsconvert
```

## Uso

```
import jsconvert from 'jsconvert'

jsconvert("Programar") // Program
jsconvert("Zorro") // Zorrope
jsconvert("Zarpar") // Zarppe
jsconvert("abecedario") // abece-dario
jsconvert("sometemos") // SoMeTeMoS
```

## Créditos
- [Roberto Canche](http://midominio.com/)

## Licencia

[MIT](https://opensource.org/licenses/MIT)