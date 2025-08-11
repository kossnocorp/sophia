#! /usr/bin/env bash

exit 0

set -e
set -o pipefail

# Quoting and strings
printf 'single\n' >/dev/null
printf "double %s\n" "$GLOBAL" >/dev/null
printf $'ansi\n\t' >/dev/null
legacy=`echo backticks` >/dev/null

# Variables and parameter expansion
demo="fooBar_baz"
: "${demo:=default}"        # default assign
: "${demo:-fallback}"       # default fallback
: "${demo:+alternate}"      # use-alternate-if-set
# : "${unset:?error}"        # error if unset (disabled intentionally)
: "${#demo}"                # length
: "${demo:1:3}"             # slice
: "${demo/foo/FOO}"         # replace first
: "${demo//a/A}"            # replace all
: "${demo#foo}" "${demo##foo}"  # remove shortest/longest prefix
: "${demo%b*z}" "${demo%%b*z}"  # remove shortest/longest suffix
: "${demo^}" "${demo,}" "${demo^^}" "${demo,,}"  # case ops
pre_ONE=1 pre_TWO=2
: "${!pre_*}"               # indirection by prefix
declare -n ref=demo          # nameref (bash)
: "$ref"
export DEMO_ENV=1
unset DEMO_ENV

# Command substitution
: "$(echo cmdsub)" >/dev/null
read -r _val <<< "value"    # here-string to read

# Pipelines and lists
printf '%s\n' a b | grep -q a | cat >/dev/null
bash -c 'echo err 1>&2' |& cat >/dev/null
printf foo | \
  tr f F | \
  cat >/dev/null
: "${PIPESTATUS[@]}"         # statuses from last pipeline
: && : || :                   # AND/OR lists

# Grouping and subshells
{ :; :; } >/dev/null 2>&1
( : )

# Arithmetic
n=$((1 + 2))
((n++))
: "$n"
if (( n > 1 )); then :; fi

# Tests and conditionals
s="ABC_123"
if [ -f /dev/null ] && [ -n "$s" ]; then :; fi
if [[ "$OSTYPE" == linux* ]]; then :; fi
if [[ $s =~ ^[A-Z]+(_[0-9]+)?$ ]]; then :; fi
if [[ -v demo ]]; then :; fi
if [[ abc123 =~ ([a-z]+)([0-9]+) ]]; then : "${BASH_REMATCH[1]}" "${BASH_REMATCH[2]}"; fi

# case/esac
word=foobar
case "$word" in
  foo) : ;;
  f*)  : ;;
  *)   : ;;
esac

# Loops
for name in a b; do :; done
for ((i = 0; i < 2; i++)); do :; done
while false; do :; done
until true; do :; done
select opt in one two; do break; done

# Jobs and background
sleep 0 & wait $!

# Functions and local
small_fn() { local tmp=1; : "$tmp"; }
function alt_fn { :; }

# Sourcing
source /dev/null
. /dev/null

# Globs, brace expansion, extglob
shopt -s extglob nullglob
: **/*.sh
shopt -s globstar
: ./*.sh {1..3} {a,b}
: @(foo|bar) ?(x) *(y) +(z) !(w)

# Arrays
declare -a arr=(x y z)
: "${arr[1]}" "${arr[@]}" "${#arr[@]}"
declare -A map=([k]=v [x]=y)
: "${map[k]}" "${!map[@]}"

# Redirections and fds
: > /dev/null
: >> /dev/null
: 2> /dev/null
: 2>&1
: < /dev/null
exec 3> /dev/null
echo "fd3" >&3
exec 3>&-

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
echo out > >(cat >/dev/null)

# getopts
while getopts ":ab:" opt; do
  case "$opt" in
    a) : ;;
    b) : ;;
    \?|:) : ;;
  esac
done

# Special vars and traps
: "$0" "$1" "$@" $* $# $? $$ $! "${IFS}" "$LINENO" "$RANDOM" "$SECONDS" "$PPID" "$PWD" "${BASH_SOURCE[0]}"
trap 'echo exiting >/dev/null' EXIT
trap 'echo ctrlc >/dev/null' INT

# Bash builtins demos
readonly CONST=42
declare -i int=0
printf -v out "%q" "quoted value"
readarray -t lines < <(printf '%s\n' a b)
alias ll='ls -la'
unalias ll
time true >/dev/null 2>&1
coproc C { :; }