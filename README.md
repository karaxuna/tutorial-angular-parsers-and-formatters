## Simple prefix directive showing `$parsers` and `$formatters` in action

Sometimes you want to format model value before displaying it in the input or
want to parse value that user enters in input before updating model value. Angular has `$parsers` and `$formatters`
for this purpose. To demonstrate how it works, let's create directive that appends prefix to what you type in
input.

![result](./screens/result.gif)