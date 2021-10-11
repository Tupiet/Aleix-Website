app.component('computer', {
    data () {
        return {
            style: {
                color: 'blue',
                fontFamily: 'monospace',
                textAlign: 'left',
                paddingLeft: '30px'
            },
        }
    },
    template: `
    <p :style="style"><slot></slot></p>
    `
});

app.component('human', {
    data () {
        return {
            style: {
                color: 'red',
                fontFamily: 'Arial',
                textAlign: 'right',
                paddingRight: '30px'
            },
        }
    },
    template: `
    <p :style="style"><slot></slot></p>
    `
});