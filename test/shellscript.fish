#!/usr/bin/env fish

exit 0

# Quoting and strings
printf 'single\n' >/dev/null
printf "double %s\n" $FISH_VERSION >/dev/null
printf 'ansi\n\t' >/dev/null
set legacy (echo backticks) >/dev/null

# Variables and expansion
set demo fooBar_baz
set -l local_only 1
set -x DEMO_ENV 1; set -e DEMO_ENV
set -l slice $demo[2..4]               # slice (1-based)
set r1 (string replace -r 'foo' 'FOO' -- $demo)     # single transform example

# Indirection via eval (use sparingly)
set name demo; eval set ref '$'$name

# Command substitution
set cmdsub (echo cmdsub)

# Pipelines and lists
printf '%s\n' a b | string match -q a | cat >/dev/null
printf foo | \
	string replace f F | \
	cat >/dev/null
true; and true; or false

# Grouping blocks
begin; :; end >/dev/null 2>&1

# Arithmetic
set n (math 1 + 2)
set n (math $n + 1)
if test $n -gt 1
	:
end

# Tests and conditionals
set s ABC_123
if test -f /dev/null; and test -n "$s"
	:
end
if string match -qr '^[A-Z]+(_[0-9]+)?$' -- $s
	:
end

# switch/case
set word foobar
switch $word
	case foo
		:
	case 'f*'
		:
	case '*'
		:
end

# Loops
for name in a b
	:
end
while false
	break
end

# Jobs and background
sleep 0 &; set pid $last_pid; wait $pid

# Functions and locals
function small_fn
	set -l tmp 1; :
end
function alt_fn; :; end

# Event handlers (process exit)
function on_exit --on-process-exit %self
	echo exiting >/dev/null
end

# Sourcing
source /dev/null

# Globs
ls **/*.fish >/dev/null 2>&1

# Lists (arrays)
set -l arr x y z
echo $arr[2] $arr >/dev/null

# Redirections
: > /dev/null
: 2>&1

# Here-strings are not native; use subshells
grep -n 'h' (printf 'hi') >/dev/null

# "Process substitution" via psub
set tmp (begin; printf '%s\n' a; end | psub)
diff $tmp $tmp >/dev/null
rm -f $tmp

# Option parsing with argparse
argparse 'a' 'b=' -- $argv 2>/dev/null
if set -q _flag_a; :; end
if set -q _flag_b; :; end

# Special vars and timing
: $argv $status $CMD_DURATION $fish_pid $PWD $HOME $version
time true >/dev/null 2>&1

