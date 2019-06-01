import React, { useState, useEffect } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { createGlobalStyle } from 'styled-components'

const themeQuery = graphql`
  query ThemeQuery {
    allThemesYaml {
      edges {
        node {
          scheme
          base00
          base01
          base02
          base03
          base04
          base05
          base06
          base07
          base08
          base09
          base0A
          base0B
          base0C
          base0D
          base0E
          base0F
        }
      }
    }
  }
`

const SyntaxHighlighter = createGlobalStyle`
code[class*='language-'],
pre[class*='language-'] {
  color: #${props => props.base05};
  background: #${props => props.base00};

  font-family: 'Fira Mono', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
    monospace;
  font-size: 1em;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;

  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

code[class*='language-'] .token,
pre[class*='language-'] .token {
  font-family: 'Fira Mono', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
    monospace;
}

pre[class*='language-']::-moz-selection,
pre[class*='language-'] ::-moz-selection,
code[class*='language-']::-moz-selection,
code[class*='language-'] ::-moz-selection {
  background: #${props => props.base01};
}

pre[class*='language-']::selection,
pre[class*='language-'] ::selection,
code[class*='language-']::selection,
code[class*='language-'] ::selection {
  background: #${props => props.base01};
}

/* Code blocks */
pre[class*="language-"] {
  padding: 1em;
  margin: .5em 0;
  overflow: auto;
}

:not(pre) > code[class*='language-'],
pre[class*='language-'] {
  border: 2px solid black;
  border-radius: 4px;
  box-shadow: 1px 1px 0px black, 3px 3px 0px black, 5px 5px 0px black;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  padding: .1em;
  border-radius: .3em;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #${props => props.base03};
}

.token.punctuation {
  color: #${props => props.base05};
}

.token.namespace {
  opacity: .7;
}

.token.operator,
.token.boolean,
.token.number {
  color: #${props => props.base09};
}
.token.property {
  color: #${props => props.base0A};
}
.token.tag {
  color: #${props => props.base0D};
}
.token.string {
  color: #${props => props.base0C};
}
.token.selector {
  color: #${props => props.base0E};
}
.token.attr-name {
  color: #${props => props.base09};
}
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
  color: #${props => props.base0C};
}

.token.attr-value,
.token.keyword,
.token.control,
.token.directive,
.token.unit {
  color: #${props => props.base0B};
}

.token.statement,
.token.regex,
.token.atrule {
  color: #${props => props.base0C};
}

.token.placeholder,
.token.variable {
  color: #${props => props.base0D};
}

.token.deleted {
  text-decoration: line-through;
}

.token.inserted {
  border-bottom: 1px dotted #${props => props.base07};
  text-decoration: none;
}

.token.italic {
  font-style: italic;
}

.token.important,
.token.bold {
  font-weight: bold;
}

.token.important {
  color: #${props => props.base08};
}

.token.entity {
  cursor: help;
}

pre > code.highlight {
  outline: .4em solid #${props => props.base08};
  outline-offset: .4em;
}

/* overrides color-values for the Line Numbers plugin
 * http://prismjs.com/plugins/line-numbers/
 */
.line-numbers .line-numbers-rows {
  border-right-color: #${props => props.base01};
}

.line-numbers-rows > span:before {
  color: #${props => props.base02};
}
`

export function useCycleThemes() {
  const [index, setIndex] = useState(0)
  function downHandler({ key }) {
    if (key === 'k') {
      setIndex(i => i + 1)
    } else if (key === 'j') {
      setIndex(i => i - 1)
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    return () => {
      window.removeEventListener('keydown', downHandler)
    }
  }, [])

  return index
}

export default ({ themeName }) => {
  // const themeIndex = useCycleThemes()
  return (
    <StaticQuery
      query={themeQuery}
      render={data => {
        const allThemes = data.allThemesYaml.edges.map(theme => theme.node)
        // const theme = allThemes[themeIndex % allThemes.length]
        const theme =
          allThemes.find(theme => theme.scheme === themeName) || allThemes[0]
        console.log('Using theme', theme.scheme)
        return <SyntaxHighlighter {...theme} />
      }}
    />
  )
}
