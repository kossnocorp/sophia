{ lib, pkgs }:

let
  greeting = "Hello, ${toString 123}!";

  listExample = [ 1 "two" { three = 3; } ];

  conditionalFn = x: if x > 0 then "Positive" else "Non-positive";

  nestedFn = x: let y = x * 2; in y + 3;

  attrFn = { a, b ? 0 } : a + b;

  recConfig = rec {
    name = "nix-syntax-test";
    version = "1.0";
    deps = [ "dep1" "dep2" ];
    inner = {
      enabled = true;
      value = conditionalFn (-1);
    };
  };

  multiLine = ''
    This is a multi-line string.
    It even interpolates: ${greeting}.
    And it spans several lines.
  '';
in
pkgs.stdenv.mkDerivation {
  name = recConfig.name;
  version = recConfig.version;
  src = null;
  buildCommand = ''
    echo "${greeting}"
    echo "List example: ${toString listExample}"
    echo "NestedFn(5): ${toString (nestedFn 5)}"
    echo "AttrFn result: ${toString (attrFn { a = 5; b = 10; })}"
    echo "${multiLine}"
    echo "Inner value: ${recConfig.inner.value}"
  '';
}
