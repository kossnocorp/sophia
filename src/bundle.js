const bundle = {
  "themes": [
    {
      "slug": "dark",
      "name": "Sophia Dark",
      "type": "dark",
      "layers": {
        "runtime": {
          "base": "#b8b0cb",
          "control": "#ff8df4",
          "effect": "#d4b0ff",
          "primitive": "#8C99B5",
          "type": "#a39be3",
          "declare": "#f2ebff",
          "access": "#C5C5C5",
          "detail": "#575165"
        },
        "data": {
          "base": "#a2acec",
          "control": "#668aff",
          "effect": "#958BFF",
          "declare": "#D9E1FF",
          "property": "#bfc5e9",
          "primitive": "#94c0ef",
          "text": "#e8efff",
          "detail": "#4b5072"
        },
        "types": {
          "base": "#b5cfb7",
          "control": "#5ff0b1",
          "effect": "#3aeca8",
          "type": "#86d2a9",
          "primitive": "#94edef",
          "runtime-declare": "#72FFC0",
          "declare": "#9AFFBC",
          "annotation-declare": "#9AFFBC",
          "interface-declare": "#85FF85",
          "generic-declare": "#A3DE6D",
          "generic-access": "#BFE799",
          "access": "#b7d9bc",
          "runtime-access": "#B7FFDF",
          "annotation-access": "#b7d9bc",
          "interface-access": "#C2FCC2",
          "property": "#a9d4d0",
          "detail": "#445047"
        },
        "memory": {
          "base": "#d67f7f",
          "control": "#ff8989",
          "effect": "#ff718b"
        },
        "macro": {
          "base": "#bcb789",
          "control": "#eeff01",
          "effect": "#e8d84a",
          "decorate": "#cbc05e",
          "declare": "#fff6bd",
          "detail": "#564e16"
        },
        "comments": {
          "base": "#cca879",
          "control": "#fba83b",
          "declare": "#f7dcb9",
          "doc-content": "#FFDEB2",
          "detail": "#55514b"
        }
      }
    }
  ],
  "base": {
    "icon.foreground": "#7A7A7A",
    "titleBar.activeBackground": "#010101",
    "titleBar.inactiveBackground": "#010101",
    "titleBar.border": "#141414",
    "activityBar.border": "#141414",
    "activityBar.activeBackground": "#010101",
    "activityBar.background": "#010101",
    "activityBar.foreground": "#bebeb1",
    "activityBar.activeBorder": "#FFFF00",
    "activityBarBadge.background": "#FF9DF2",
    "activityBarBadge.foreground": "#160013",
    "sideBar.border": "#141414",
    "sideBar.background": "#010101",
    "sideBar.foreground": "#989898",
    "statusBar.background": "#010101",
    "statusBar.border": "#141414",
    "statusBar.foreground": "#818181",
    "statusBar.noFolderBackground": "#010101",
    "statusBarItem.remoteBackground": "#58004C",
    "statusBarItem.remoteForeground": "#FF8CF0",
    "statusBar.debuggingBackground": "#180034",
    "statusBar.debuggingForeground": "#BA91DF",
    "statusBar.debuggingBorder": "#4B00A1",
    "tree.indentGuidesStroke": "#141414",
    "menu.background": "#171717",
    "editorPane.background": "#080808",
    "editorGroup.border": "#141414",
    "editorGroupHeader.border": "#141414",
    "editorGroupHeader.noTabsBackground": "#010101",
    "editorGroupHeader.tabsBackground": "#080808",
    "editorGroupHeader.tabsBorder": "#141414",
    "tab.border": "#010101",
    "tab.activeBackground": "#400037",
    "tab.activeForeground": "#ffffff",
    "tab.activeBorder": "#FF00DD",
    "tab.unfocusedActiveBackground": "#1E001A",
    "tab.unfocusedActiveForeground": "#bebeb1",
    "tab.unfocusedActiveBorder": "#57004B",
    "tab.inactiveBackground": "#080808",
    "tab.inactiveForeground": "#bebeb1",
    "breadcrumb.foreground": "#7A7A7A",
    "breadcrumb.border": "#7A7A7A",
    "breadcrumb.background": "#010101",
    "editor.background": "#010101",
    "editor.foreground": "#7e7e7e",
    "editorLineNumber.foreground": "#4d4d4d",
    "editor.lineHighlightBackground": "#0f0f0f",
    "editorIndentGuide.background1": "#101010",
    "editorIndentGuide.activeBackground1": "#252525",
    "editorRuler.foreground": "#1F1A00",
    "editor.foldBackground": "#0f0f0f7b",
    "editorBracketHighlight.foreground1": "#290014",
    "editorBracketHighlight.foreground2": "#002017",
    "editorBracketHighlight.foreground3": "#00153c",
    "editorBracketHighlight.foreground4": "#290014",
    "editorBracketHighlight.foreground5": "#002017",
    "editorBracketHighlight.foreground6": "#00153c",
    "editorInlayHint.foreground": "#565656",
    "editorInlayHint.typeForeground": "#445047",
    "editorCursor.background": "#010101",
    "editorCursor.foreground": "#FFD900",
    "terminal.background": "#010101",
    "terminal.tab.activeBorder": "#8904e8bc",
    "terminalCursor.foreground": "#FFD900",
    "terminalCursor.background": "#010101",
    "list.warningForeground": "#FFE137",
    "list.errorForeground": "#FF7B7B",
    "gitDecoration.modifiedResourceForeground": "#91AFFF",
    "gitDecoration.stageModifiedResourceForeground": "#A2B2DF",
    "gitDecoration.addedResourceForeground": "#A1D2A4",
    "gitDecoration.deletedResourceForeground": "#DCB09A"
  },
  "languages": [
    {
      "layers": {
        "data": {
          "text": [
            "text.astro"
          ]
        }
      }
    },
    {
      "layers": {
        "runtime": {
          "base": [
            "source",
            "variable",
            "meta.embedded.line",
            "variable.object.property",
            "storage.modifier",
            "keyword.operator.rest",
            "keyword.operator.spread",
            "keyword.operator.expression.typeof",
            "keyword.operator.expression.instanceof",
            "keyword.control.import",
            "keyword.control.from",
            "meta.import keyword.control.as"
          ],
          "effect": [
            "keyword.operator.assignment",
            "meta.function-call entity.name.function",
            "keyword.operator.expression.delete",
            "keyword.operator.comparison",
            "keyword.operator.expression.extends",
            "keyword.operator.expression.instanceof",
            "keyword.operator.expression.of",
            "keyword.operator.new",
            "support.class.component"
          ],
          "control": [
            {
              "keyword": [
                "conditional"
              ]
            },
            "keyword.control.export",
            "keyword.control.flow",
            "keyword.control.conditional",
            "keyword.operator.ternary",
            "keyword.control.loop",
            "keyword.control.switch",
            "keyword.control.import",
            "keyword.control.from",
            "keyword.operator.logical"
          ],
          "type": [
            "storage.type"
          ],
          "declare": [
            {
              "variable": [
                "declaration"
              ]
            },
            {
              "property": [
                "definition"
              ]
            },
            {
              "parameter": [
                "definition"
              ]
            },
            {
              "parameter": [
                "declaration"
              ]
            },
            "variable.other.readwrite.alias",
            "meta.definition.function",
            "meta.definition.variable",
            "meta.field.declaration variable.object.property",
            "meta.definition.method"
          ],
          "primitive": null,
          "access": [
            "support.variable.property",
            "entity.name.tag"
          ],
          "detail": [
            "punctuation",
            "punctuation.terminator.statement",
            "punctuation.definition.parameters.begin",
            "punctuation.definition.parameters.end",
            "meta.brace.round",
            "punctuation.definition.block",
            "storage.type.function.arrow",
            "punctuation.separator.comma",
            "punctuation.separator.parameter",
            "punctuation.definition.section.case-statement",
            "punctuation.accessor",
            "punctuation.comma"
          ]
        },
        "data": {
          "property": [
            "meta.object-literal.key",
            {
              "property": [
                "declaration"
              ]
            }
          ],
          "primitive": [
            "constant.numeric",
            "constant.language",
            "string"
          ],
          "detail": [
            "punctuation.definition.string.begin",
            "punctuation.definition.string.end"
          ]
        },
        "types": {
          "base": [
            "meta.type.declaration storage.type",
            "storage.type.namespace",
            "meta.interface",
            "keyword.operator.type.annotation",
            "meta.field.declaration",
            "meta.type.annotation",
            "meta.interface",
            "meta.namespace.declaration punctuation.terminator"
          ],
          "control": [
            "meta.namespace.declaration keyword.control.export",
            "meta.type.declaration keyword.control.export",
            "meta.interface keyword.control.export",
            "meta.type.declaration keyword.operator.ternary",
            "meta.type.infer keyword.operator.expression.extends",
            "meta.type.declaration storage.modifier",
            "meta.type.parameters storage.modifier",
            "meta.interface keyword.operator.ternary",
            "keyword.control.satisfies"
          ],
          "effect": [
            "keyword.operator.type",
            "keyword.operator.expression.infer",
            "meta.indexer.mappedtype.declaration keyword.operator.expression.in",
            "keyword.operator.expression.keyof",
            "meta.interface storage.modifier",
            "meta.type.annotation storage.modifier",
            "keyword.control.as"
          ],
          "type": [
            "storage.type.interface"
          ],
          "primitive": [
            "support.type.primitive",
            "meta.type.parameters string",
            "meta.type.annotation string",
            "meta.type.annotation support.type.builtin",
            "meta.interface support.type.builtin",
            "meta.type.declaration support.type.builtin",
            "meta.namespace.declaration string",
            "meta.interface constant",
            "meta.field.declaration",
            "meta.object.type variable.object.property",
            "meta.interface meta.objectliteral"
          ],
          "declare": [
            "entity.name.type.alias",
            "meta.type.infer entity.name.type",
            "meta.interface variable.parameter",
            "meta.interface variable.object.property",
            "meta.interface entity.name.function"
          ],
          "access": [
            "meta.interface variable.other.readwrite",
            "meta.interface entity.other.inherited-class",
            "meta.interface variable.other.property"
          ]
        },
        "comments": {
          "base": [
            "comment",
            "comment.block.documentation"
          ],
          "control": [
            "storage.type.class.jsdoc"
          ],
          "declare": [
            "variable.other.jsdoc"
          ],
          "detail": [
            "punctuation.definition.comment",
            "punctuation.definition.block.tag.jsdoc"
          ]
        }
      }
    },
    {
      "layers": {
        "memory": {
          "control": [
            "storage.modifier.unsafe.cs"
          ],
          "effect": [
            "punctuation.separator.asterisk.cs"
          ]
        }
      }
    },
    {
      "layers": {
        "data": {
          "base": null,
          "control": [
            "keyword.control.at-rule.css",
            "keyword.operator.combinator.css",
            "keyword.control.at-rule.import.css",
            "keyword.control.at-rule.import.css punctuation.definition.keyword.css"
          ],
          "effect": [
            "support.function.misc.css",
            "support.function.calc.css",
            "keyword.operator.arithmetic.css",
            "entity.other.attribute-name.pseudo-class.css",
            "keyword.operator.pattern.css",
            "support.function.layer.css"
          ],
          "declare": [
            "meta.selector.css entity.name.tag.css",
            "entity.other.attribute-name.class.css"
          ],
          "property": [
            "variable.css",
            "support.type.property-name.css"
          ],
          "primitive": [
            "constant.other.color.rgb-value.hex.css",
            "support.constant.font-name.css"
          ]
        }
      }
    },
    {
      "id": "dockerfile",
      "layers": {
        "runtime": null
      }
    },
    {
      "id": "fish",
      "layers": {
        "runtime": {
          "access": [
            "variable.other.fish"
          ]
        }
      }
    },
    {
      "layers": {
        "runtime": {
          "control": [
            "entity.name.section.fsharp keyword.fsharp"
          ],
          "effect": [
            "keyword.symbol.fsharp"
          ],
          "declare": [
            "variable.fsharp",
            "entity.name.section.fsharp"
          ],
          "access": [
            "source.fsharp.fsl"
          ],
          "support": [
            "binding.fsharp",
            "keyword.fsharp",
            "binding.fsharp",
            "keyword.symbol.fsharp"
          ]
        }
      }
    },
    {
      "layers": {
        "runtime": {
          "control": [
            "keyword.package.go",
            "keyword.const.go",
            "keyword.var.go",
            "keyword.operator.channel.go"
          ],
          "effect": [
            "entity.name.function.support.go",
            "entity.name.function.support.builtin.go",
            "keyword.operator.arithmetic.bitwise.go"
          ],
          "declare": [
            "variable.other.constant.go",
            "variable.other.assignment.go",
            "variable.parameter.go"
          ],
          "access": [
            "variable.other.go"
          ],
          "type": [
            "keyword.function.go"
          ]
        },
        "types": {
          "base": [
            "entity.name.type.go"
          ],
          "declare": [
            "entity.name.type.go",
            "entity.name.function.go"
          ],
          "type": [
            "keyword.struct.go",
            "keyword.interface.go"
          ],
          "primitive": [
            "keyword.other.unit.binary.go",
            "keyword.other.unit.octal.go",
            "keyword.other.unit.hexadecimal.go",
            "storage.type.numeric.go",
            "storage.type.string.go",
            "storage.type.byte.go",
            "entity.name.type.any.go",
            "keyword.map.go",
            "storage.type.error.go",
            "entity.name.type.comparable.go"
          ]
        },
        "data": {
          "property": [
            "variable.other.property.go"
          ]
        }
      }
    },
    {
      "layers": {
        "types": {
          "base": [
            "source.graphql"
          ],
          "control": [
            "keyword.schema.graphql",
            "keyword.type.graphql",
            "punctuation.or.graphql",
            "keyword.directive.graphql",
            "keyword.fragment.graphql",
            "keyword.operation.graphql",
            "keyword.union.graphql",
            "keyword.input.graphql",
            "keyword.interface.graphql",
            "keyword.enum.graphql",
            "keyword.scalar.graphql"
          ],
          "effect": [
            "keyword.operator.nulltype.graphql",
            "meta.type.object.graphql entity.name.function.directive.graphql"
          ],
          "primitive": [
            "support.type.builtin.graphql",
            "string.quoted.double.graphql"
          ],
          "declare": [
            "support.type.enum.graphql",
            "support.type.graphql",
            "entity.scalar.graphql",
            "entity.name.fragment.graphql",
            "entity.name.function.directive.graphql",
            "entity.name.function.graphql",
            "constant.character.enum.graphql"
          ],
          "access": [
            "variable.parameter.graphql",
            "variable.fragment.graphql"
          ],
          "detail": [
            "punctuation.colon.graphql",
            "punctuation.operation.graphql",
            "punctuation.definition.string.begin.graphql",
            "punctuation.definition.string.begin.graphql",
            "punctuation.definition.string.end.graphql",
            "meta.brace.round.directive.graphql",
            "meta.brace.square.graphql",
            "punctuation.comma.graphql",
            "meta.brace.round.graphql"
          ],
          "property": [
            "variable.graphql",
            "variable.arguments.graphql"
          ]
        }
      }
    },
    {
      "layers": {
        "data": {
          "base": [
            "entity.name.tag"
          ],
          "property": [
            "entity.other.attribute-name"
          ],
          "text": [
            "text.html.derivative"
          ],
          "detail": [
            "punctuation.definition.tag",
            "punctuation.separator.key-value",
            "punctuation.definition.string.begin.html",
            "punctuation.definition.string.end.html"
          ]
        }
      }
    },
    {
      "layers": {
        "runtime": {
          "control": [
            "keyword.control.default",
            "storage.modifier.async",
            "meta.class storage.modifier",
            "keyword.control.trycatch",
            "keyword.generator.asterisk"
          ],
          "effect": [
            "meta.function-call support.class",
            "meta.function-call variable.language.super",
            "entity.name.function.tagged-template",
            "keyword.operator.spread"
          ],
          "access": [
            "variable.language.arguments"
          ]
        },
        "data": {
          "control": [
            "punctuation.definition.template-expression.begin",
            "punctuation.definition.template-expression.end"
          ],
          "detail": [
            "meta.objectliteral punctuation.definition.block",
            "punctuation.separator.key-value",
            "meta.objectliteral punctuation.separator.comma",
            "meta.array.literal meta.brace.square",
            "meta.array.literal punctuation.separator.comma",
            "punctuation.definition.string.template.begin",
            "punctuation.definition.string.template.end"
          ]
        }
      }
    },
    {
      "layers": {
        "data": {
          "property": [
            "support.type.property-name.json"
          ],
          "detail": [
            "punctuation.definition.dictionary.begin.json",
            "punctuation.definition.dictionary.end.json",
            "punctuation.support.type.property-name.begin.json",
            "punctuation.support.type.property-name.end.json",
            "punctuation.definition.string.begin.json",
            "punctuation.definition.string.end.json",
            "punctuation.separator.dictionary.key-value.json",
            "punctuation.definition.array.begin.json",
            "punctuation.definition.array.end.json",
            "punctuation.separator.array.json",
            "punctuation.separator.dictionary.pair.json"
          ]
        }
      }
    },
    {
      "layers": {
        "data": {
          "text": [
            "meta.jsx.children meta.jsx.children"
          ],
          "property": [
            "entity.other.attribute-name.js.jsx"
          ],
          "detail": [
            "punctuation.section.embedded.begin.jsx",
            "punctuation.section.embedded.end.jsx",
            "punctuation.section.embedded.begin.tsx",
            "punctuation.section.embedded.end.tsx",
            "meta.tag.attributes.js.jsx keyword.operator.assignment.js.jsx"
          ]
        }
      }
    },
    {
      "layers": {
        "runtime": {
          "control": [
            "entity.name.function.just",
            "keyword.operator.quiet.just",
            "support.function.system.just"
          ],
          "access": [
            "source.just"
          ],
          "detail": [
            "keyword.operator.recipe.end.just"
          ]
        }
      }
    },
    {
      "layers": {
        "runtime": {
          "control": [
            "entity.name.function.target.makefile",
            "keyword.control.@.makefile",
            "constant.character.escape.continuation.makefile"
          ],
          "effect": [
            "meta.scope.prerequisites.makefile"
          ],
          "access": [
            "source.makefile"
          ],
          "detail": [
            "punctuation.separator.key-value.makefile"
          ]
        }
      }
    },
    {
      "layers": {
        "data": {
          "base": [
            "markup.quote.markdown",
            "punctuation.definition.list.begin.markdown",
            "meta.separator.markdown",
            "markup.underline.link.markdown",
            "constant.other.reference.link.markdown"
          ],
          "control": [
            "markup.heading",
            "string.other.link.title.markdown",
            "markup.underline.link.image.markdown"
          ],
          "primitive": [
            "markup.inline.raw.string.markdown"
          ],
          "text": [
            "meta.paragraph.markdown",
            "text.html.markdown"
          ],
          "detail": [
            "meta.link.inline.markdown",
            "meta.link.reference.def.markdown",
            "punctuation.definition.raw.markdown",
            "punctuation.definition.bold.markdown",
            "punctuation.definition.italic.markdown",
            "punctuation.definition.markdown",
            "fenced_code.block.language.markdown",
            "punctuation.definition.link.description.begin.markdown",
            "punctuation.definition.link.description.end.markdown",
            "punctuation.definition.metadata.markdown",
            "meta.link.reference.markdown"
          ]
        }
      },
      "styles": {
        "bold": [
          "markup.heading",
          "markup.bold"
        ],
        "italic": [
          "markup.italic"
        ],
        "underline": [
          "markup.underline",
          "string.other.link.title.markdown",
          "constant.other.reference.link.markdown"
        ]
      }
    },
    {
      "id": "nix",
      "layers": {
        "runtime": {
          "control": [
            "keyword.other.inherit.nix"
          ],
          "effect": [
            "support.function.nix",
            {
              "operator": true
            },
            "keyword.operator.nix",
            "keyword.operator.bind.nix"
          ],
          "type": [
            "keyword.other.nix"
          ]
        },
        "data": {
          "control": [
            "punctuation.section.embedded.begin.nix",
            "punctuation.section.embedded.end.nix"
          ],
          "property": [
            {
              "property": [
                "definition"
              ]
            }
          ],
          "detail": [
            "punctuation.definition.string.double.start.nix",
            "punctuation.definition.string.double.end.nix",
            "punctuation.definition.string.other.start.nix",
            "punctuation.definition.string.other.end.nix"
          ]
        }
      }
    },
    {
      "id": "python",
      "layers": {
        "runtime": {
          "effect": [
            "meta.function-call.python"
          ],
          "control": [
            "storage.type.function.async.python"
          ],
          "declare": [
            {
              "function": [
                "declaration"
              ]
            },
            {
              "class": [
                "declaration"
              ]
            },
            {
              "method": [
                "declaration"
              ]
            }
          ],
          "detail": [
            "punctuation.definition.inheritance.begin.python",
            "punctuation.definition.inheritance.end.python",
            "punctuation.separator.inheritance.python",
            "punctuation.section.class.begin.python",
            "punctuation.section.function.begin.python",
            "punctuation.separator.parameters.python",
            "punctuation.separator.colon.python",
            "punctuation.definition.arguments.begin.python",
            "punctuation.definition.arguments.end.python",
            "punctuation.separator.element.python",
            "punctuation.separator.arguments.python",
            "punctuation.parenthesis.begin.python",
            "punctuation.parenthesis.end.python",
            "meta.function-call.python punctuation.separator.period.python",
            "meta.member.access.python punctuation.separator.period.python"
          ]
        },
        "data": {
          "control": [
            "string.interpolated.python storage.type",
            "constant.character.format.placeholder.other.python"
          ],
          "primitive": [
            {
              "module": true
            }
          ],
          "detail": [
            "punctuation.definition.list.begin.python",
            "punctuation.definition.list.end.python",
            "punctuation.definition.dict.begin.python",
            "punctuation.definition.dict.end.python",
            "punctuation.separator.dict.python"
          ]
        },
        "types": {
          "base": [
            {
              "class": [
                "typeHint"
              ]
            },
            {
              "variable": [
                "typeHint"
              ]
            },
            {
              "builtinConstant": [
                "typeHint"
              ]
            }
          ],
          "detail": [
            "punctuation.separator.annotation.result.python",
            "punctuation.separator.annotation.python"
          ]
        },
        "macro": {
          "decorate": [
            "entity.name.function.decorator.python"
          ]
        },
        "comments": {
          "base": [
            "string.quoted.docstring"
          ],
          "detail": [
            "string.quoted.docstring.multi.python punctuation.definition.string.begin.python",
            "string.quoted.docstring.multi.python punctuation.definition.string.end.python"
          ]
        }
      }
    },
    {
      "id": "rust",
      "layers": {
        "runtime": {
          "base": null,
          "control": [
            "keyword.control.flow.rust",
            "keyword.operator.arrow.fat.rust",
            "keyword.operator.question.rust",
            "meta.use.rust keyword.other.rust",
            "meta.use.rust keyword.other.crate.rust",
            {
              "keyword": [
                "controlFlow"
              ]
            },
            "source.rust keyword.other.rust",
            "source.rust keyword.control.rust",
            "meta.function.definition.rust variable.language.self.rust",
            "source.rust storage.type.rust",
            "keyword.operator.subpattern.rust",
            "keyword.operator.logical.rust",
            {
              "selfKeyword": true
            },
            {
              "selfTypeKeyword": true
            }
          ],
          "effect": [
            "meta.function.call.rust entity.name.function.rust"
          ],
          "type": [
            "keyword.other.fn.rust"
          ],
          "declare": [
            "meta.function.definition.rust entity.name.function.rust",
            "meta.use.rust entity.name.type.rust"
          ],
          "detail": [
            "punctuation.brackets.round.rust",
            "punctuation.brackets.curly.rust",
            "punctuation.semi.rust",
            "keyword.operator.arrow.skinny.rust",
            "keyword.operator.namespace.rust",
            "keyword.operator.key-value.rust",
            "punctuation.brackets.square.rust",
            "keyword.operator.access.dot.rust"
          ],
          "access": [
            {
              "function": [
                "intraDocLink"
              ]
            }
          ]
        },
        "data": {
          "base": [
            {
              "namespace": true
            },
            {
              "keyword": [
                "crateRoot"
              ]
            }
          ],
          "property": [
            {
              "property": true
            }
          ]
        },
        "memory": {
          "effect": [
            "keyword.operator.borrow.and.rust",
            "keyword.operator.dereference.rust",
            "punctuation.definition.lifetime.rust",
            "storage.modifier.mut.rust",
            {
              "lifetime": true
            }
          ]
        },
        "types": {
          "base": [
            "meta.function.definition.rust entity.name.type.rust"
          ],
          "control": [
            "keyword.declaration.type.rust storage.type.rust",
            "keyword.declaration.trait.rust storage.type.rust"
          ],
          "detail": [
            "punctuation.brackets.angle.rust"
          ],
          "runtime-declare": [
            {
              "struct": [
                "declaration",
                "public"
              ]
            },
            {
              "enum": [
                "declaration",
                "public"
              ]
            },
            {
              "enumMember": [
                "declaration",
                "public"
              ]
            }
          ],
          "runtime-access": [
            {
              "struct": [
                "library"
              ]
            },
            {
              "struct": [
                "public"
              ]
            },
            {
              "enum": [
                "library"
              ]
            },
            {
              "enum": [
                "public"
              ]
            },
            {
              "enumMember": [
                "library"
              ]
            },
            {
              "enumMember": [
                "public"
              ]
            }
          ],
          "interface-declare": [
            {
              "interface": [
                "declaration"
              ]
            }
          ],
          "interface-access": [
            {
              "interface": [
                "library"
              ]
            },
            {
              "interface": [
                "public"
              ]
            }
          ],
          "generic-declare": [
            {
              "typeParameter": [
                "declaration"
              ]
            },
            {
              "typeAlias": [
                "associated"
              ]
            }
          ],
          "generic-access": [
            {
              "typeParameter": true
            }
          ],
          "access": [
            {
              "struct": [
                "documentation"
              ]
            },
            {
              "interface": [
                "documentation"
              ]
            }
          ]
        },
        "macro": {
          "base": [
            {
              "generic": [
                "attribute"
              ]
            },
            {
              "derive": [
                "attribute"
              ]
            }
          ],
          "control": [
            "entity.name.function.macro.rules.rust",
            "keyword.operator.macro.dollar.rust",
            "variable.other.metavariable"
          ],
          "effect": [
            "meta.macro.rust"
          ],
          "decorate": [
            {
              "decorator": true
            },
            {
              "builtinAttribute": true
            },
            {
              "deriveHelper": true
            }
          ],
          "declare": [
            {
              "macro": [
                "declaration"
              ]
            }
          ],
          "detail": [
            {
              "attributeBracket": true
            },
            "meta.macro.metavariable.rust keyword.operator.key-value.rust"
          ]
        },
        "comments": {
          "doc-content": [
            {
              "comment": [
                "documentation"
              ]
            }
          ]
        }
      }
    },
    {
      "id": "shellscript",
      "layers": {
        "runtime": {
          "control": [
            "keyword.other.inherit.nix",
            "punctuation.separator.statement.background.shell",
            "keyword.control.shell",
            "storage.modifier.export.shell",
            "keyword.operator.pipe.shell",
            "keyword.operator.pattern.case.shell",
            "punctuation.definition.evaluation.backticks.shell",
            "punctuation.separator.statement.and.shell",
            "keyword.operator.redirect.shell"
          ],
          "effect": [
            "entity.name.function.call.shell",
            "variable.language.special.wildcard.shell",
            "storage.modifier.declare.shell"
          ],
          "declare": [
            "variable.other.assignment.shell",
            "entity.name.function.shell",
            "variable.other.for.shell"
          ],
          "type": [
            "storage.modifier.local.shell",
            "storage.modifier.readonly.shell"
          ],
          "detail": [
            "constant.character.escape.line-continuation.shell"
          ]
        },
        "data": {
          "base": [
            "string.unquoted.argument"
          ],
          "control": [
            "punctuation.definition.subshell.single.shell",
            "punctuation.definition.variable.shell"
          ]
        }
      }
    },
    {
      "id": "swift",
      "layers": {
        "runtime": {
          "base": [
            "keyword.control.import.swift"
          ],
          "control": [
            "storage.modifier.swift",
            "keyword.other.declaration-specifier.accessibility.swift"
          ],
          "type": [
            "keyword.other.declaration-specifier.swift"
          ],
          "declare": [
            "meta.import.swift entity.name.type.swift"
          ],
          "detail": [
            "punctuation.section.function.begin.swift",
            "punctuation.section.function.end.swift",
            "punctuation.section.scope.begin.swift",
            "punctuation.section.scope.end.swift"
          ]
        },
        "types": {
          "base": [
            "support.type.swift"
          ]
        }
      }
    },
    {
      "layers": {
        "data": {
          "control": [
            "keyword.control.at-rule.utility.tailwind",
            "keyword.control.at-rule.layer.tailwind",
            "keyword.control.at-rule.layer.tailwind punctuation.definition.keyword.css"
          ],
          "effect": [
            "keyword.control.at-rule.apply.tailwind",
            "keyword.control.at-rule.apply.tailwind punctuation.definition.keyword.css",
            "keyword.control.at-rule.theme.tailwind"
          ],
          "declare": [
            "variable.parameter.utility.tailwind",
            "variable.parameter.layer.tailwind"
          ]
        }
      }
    },
    {
      "layers": {
        "runtime": null,
        "data": {
          "control": [
            "meta.table.toml support.type.property-name.table.toml"
          ],
          "property": [
            "support.type.property-name.toml"
          ],
          "primitive": [
            "constant.language.boolean.toml"
          ]
        }
      }
    },
    {
      "id": [
        "typescript",
        "typescriptreact"
      ],
      "layers": {
        "types": {
          "base": [
            "meta.import keyword.control.type",
            {
              "namespace": true
            },
            {
              "interface": true
            },
            {
              "type": true
            }
          ],
          "control": [
            "meta.export keyword.control.type"
          ],
          "effect": [
            "keyword.operator.expression.typeof"
          ],
          "declare": null,
          "primitive": [
            "support.type.builtin"
          ],
          "detail": [
            "punctuation.definition.typeparameters.begin",
            "punctuation.definition.typeparameters.end",
            "meta.type.parameters punctuation.separator.comma",
            "meta.object.type.ts punctuation.definition.block.ts",
            "meta.object.type.ts meta.brace.square.ts",
            "keyword.operator.type.annotation",
            "meta.return.type punctuation.accessor"
          ]
        }
      }
    },
    {
      "layers": {
        "types": {
          "base": [
            "storage.type.tag-handle.yaml"
          ]
        },
        "data": {
          "control": [
            "entity.other.document.begin.yaml",
            "keyword.control.flow.block-scalar.literal.yaml",
            "punctuation.definition.anchor.yaml",
            "entity.name.type.anchor.yaml",
            "punctuation.definition.alias.yaml",
            "variable.other.alias.yaml"
          ],
          "property": [
            "entity.name.tag.yaml"
          ],
          "detail": [
            "punctuation.definition.block.sequence.item.yaml",
            "punctuation.separator.key-value.mapping.yaml",
            "punctuation.definition.string.begin.yaml",
            "punctuation.definition.string.end.yaml",
            "punctuation.definition.sequence.begin.yaml",
            "punctuation.definition.sequence.end.yaml",
            "punctuation.separator.sequence.yaml"
          ]
        }
      }
    }
  ]
};

module.exports = bundle;