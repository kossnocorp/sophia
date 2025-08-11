#!/usr/bin/env zsh

exit 0

set -e
setopt pipefail

# Quoting and strings
print -r -- 'single' >/dev/null
print -r -- "double $ZSH_VERSION" >/dev/null
print -r -- $'ansi\n\t' >/dev/null
legacy=`echo backticks` >/dev/null

# Variables and parameter expansion
demo="fooBar_baz"
: ${demo:=default}            # default assign
: ${demo:-fallback}           # default fallback
: ${demo:+alternate}          # use-alternate-if-set
: ${#demo}                    # length
: ${demo[2,4]}                # slice (1-based)
: ${demo/foo/FOO}             # replace first
: ${demo//a/A}                # replace all
: ${demo#foo} ${demo##foo}    # remove shortest/longest prefix
: ${demo%b*z} ${demo%%b*z}    # remove shortest/longest suffix
: ${(U)demo} ${(L)demo}       # case ops (zsh)
prefix_ONE=1 prefix_TWO=2
name=demo
: ${(P)name}                  # indirection via ${(P)...}
typeset -a arr=(x y z)
: ${arr[2]} ${#arr} ${#arr[@]}
typeset -A map
map=( [k]=v [x]=y )
: ${map[k]} ${(k)map}         # value and keys

# Command substitution
: "$(echo cmdsub)" >/dev/null

# Pipelines and lists
print -r -- a b | grep -q a | cat >/dev/null
print -u2 -- err |& cat >/dev/null
print -r -- foo | \
	tr f F | \
	cat >/dev/null
: ${pipestatus[*]}            # statuses from last pipeline
: && : || :                   # AND/OR lists

# Grouping and subshells
{ :; :; } >/dev/null 2>&1
( : )

# Arithmetic
n=$((1 + 2))
(( n++ ))
: $n
if (( n > 1 )); then :; fi

# Tests and conditionals
s="ABC_123"
if [ -f /dev/null ] && [ -n "$s" ]; then :; fi
if [[ "$OSTYPE" == linux* ]]; then :; fi
if [[ "abc123" =~ '([a-z]+)([0-9]+)' ]]; then : ${(q)match[1]} ${(q)match[2]}; fi
if [[ -n ${parameters[demo]} ]]; then :; fi
path="/tmp/foo/bar.txt"
: ${path:h} ${path:t} ${path:r} ${path:e}  # head, tail, root, ext

# case/esac
word=foobar
case "$word" in
	foo) : ;;
	f*)  : ;;
	*)   : ;;
esac

# Loops
for name in a b; do :; done
for i in {1..2}; do :; done
while false; do :; done
until true; do :; done
select opt in one two; do break; done

# Jobs and background
sleep 0 & wait $!

# Functions and local
small_fn() { local tmp=1; : $tmp; }
function alt_fn { :; }

# Sourcing
source /dev/null
. /dev/null

# Globs and extendedglob
setopt extended_glob null_glob
: **/*.zsh
: (#i)FoO
: *(.)
: ^*.md

# Arrays and subscripting quirks
set -A arr2 a b c
: ${arr2[1]} ${arr2[2,3]} ${#arr2}

# Redirections and fds
: > /dev/null
: >> /dev/null
: 2> /dev/null
: 2>&1
: < /dev/null
exec {fd}>/dev/null
print -r -- fd >&$fd
exec {fd}>&-

# Here-docs and here-strings
cat <<'EOF' >/dev/null
literal $NOEXPAND $(nope) `nope`
EOF
cat <<-EOF >/dev/null
indented
EOF
grep -n "h" <<< "hi" >/dev/null
cat <<EOF >/dev/null
expanded $USER
EOF

# Process substitution
diff <(printf '%s\n' a) <(printf '%s\n' a) >/dev/null
print -r -- out > >(cat >/dev/null)

# getopts
while getopts ":ab:" opt; do
	case "$opt" in
		a) : ;;
		b) : ;;
		\?|:) : ;;
	esac
done

# Special vars and traps
: "$0" "$1" "$@" $* $# $? $$ $! "$IFS" "$RANDOM" "$SECONDS" "$PPID" "$PWD" "$ZSH_VERSION"
trap 'print -r -- exiting >/dev/null' EXIT
trap 'print -r -- ctrlc >/dev/null' INT

# Builtins demos
readonly CONST=42
typeset -i int=0
val="quoted value"; : ${(q)val}
alias ll='ls -la'
unalias ll
time true >/dev/null 2>&1
coproc C { :; }

