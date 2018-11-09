// part of node so don't need to install
const path = require('path')


// compiled at build time
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        graphql(`
            {
                allMarkdownRemark {
                edges {
                    node {
                    frontmatter {
                        slug
                    }
                    }
                }
                }
            }
        `).then(results => {
            results.data.allMarkdownRemark.edges.forEach(({node}) => {
                createPage({
                    path: `/posts${node.frontmatter.slug}`,
                    component: path.resolve('./src/components/postLayout.js'),
                    context: {
                        slug: node.frontmatter.slug,
                    }
                });
            })
            resolve();
        })
        
    })

    
}