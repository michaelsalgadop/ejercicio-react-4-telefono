# Ejercicio Teléfono

## Enunciado

Aquí tienes la maquetación HTML/CSS de una aplicación, tendrás que programarla en React.

1. Crea un nuevo proyecto de React.
2. Copia el CSS de la maqueta en el archivo del CSS general de la app.
3. Llévate el HTML correspondiente a la vista de tu app.
4. Llévate el favicon de esta maqueta a tu app.
5. Cambia el `<title>` de tu app a "Teléfono"
6. Comprueba que todo se ve exactamente igual que en la maqueta.
7. Se debe poder escribir un número de teléfono clicando en los botones numéricos. La tecla borrar puede borrar el último dígito o borrar el número completo, como prefieras.
8. Sólo se verá o el botón Llamar o el botón Colgar, nunca los dos a la vez.
9. No se puede introducir un número de más de 9 cifras.
10. El botón Llamar sólo se puede pulsar si el número tiene 9 cifras. Cuando tenga 9 cifras el botón debe tener la clase "activo".
11. El mensaje superior "Llamando..." sólo aparece cuando se pulsa el botón "Llamar" y mientras dure la llamada. Usa la clase "off" para controlar su visibilidad (el elemento HTML correspondiente debe seguir estando, aunque no se vea).
12. Al pulsar el botón "Llamar", éste debe desaparecer del DOM y debe aparecer en su lugar el botón "Colgar". El teclado tiene que quedar deshabilitado (con el atributo `disabled` en cada button).
13. Al pulsar el botón "Colgar", éste debe desaparecer y debe aparecer en su lugar el botón "Llamar". El teclado tiene que habilitarse. Además, se debe borrar el número de teléfono.
14. Si no ocurre nada tras cinco segundos de llamada, ésta se debe colgar automáticamente.

### Bola extra:

Separa todo en los siguientes componentes:

- Info
- Display
- Acciones
  - Accion
- Teclado
  - Tecla
