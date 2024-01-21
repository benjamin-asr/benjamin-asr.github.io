## Table of Content 
- [np](#np)

### [◄ Acc Script](AccScript.md)

## np
```
np("name", "title")
{
	if( "$1"=="shape" )
    {
        uia_toggle("$3")
    }
}
```
Named Pipe command `np` is a capability that you can call scripts from a named pipe channel. This block of code is not executed by `AccJoon` in order. To inject some commands on-demand, use `np` block of code. Its format looks like `app` command.

** <name\> ** `case-insensitive`

name is part of application app's name.

Examples: `Qt`, `Altium`, `Telegram`

** <title\>** `optional`

To match better, you can specify a string that the matched window title should have.

In case of passing arguments from named pipe, they are interpreted as variables and will be set in variable list of the `np` application. Arguments are comma separated and set on script variables in order.

### Named Pipe

Named Pipe command looks like:
```
named_pipe name, arguments
```

Example: 
```
named_pipe_data: Altium, shape, wire
```
then variable `$1` is set to `shape` and `$2` is set to `wire`.