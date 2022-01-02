export type TChipItem = {
    image: string,
    title: string,
    bgColors: string[],
    colors: string[],
}

class Data {
    get colors(): TChipItem[] {
        return [
            {
                image: '',
                title: '',
                bgColors: ['#DBD7D4'],
                colors: ['#6FA79C', '#E5A179', '#468C42', '#D7A43A', '#835272', '#93937C', '#A76C2C'],
            },
            {
                image: '',
                title: '',
                bgColors: ['#DBD7D4'],
                colors: ['#6FA79C', '#E5A179', '#468C42', '#D7A43A', '#835272'],
            },
            {
                image: '',
                title: '',
                bgColors: ['#DBD7D4'],
                colors: ['#6FA79C', '#E5A179', '#468C42', '#D7A43A'],
            },
            {
                image: '',
                title: '',
                bgColors: ['#DBD7D4'],
                colors: ['#6FA79C', '#E5A179', '#468C42', '#D7A43A'],
            },
            {
                image: '',
                title: '',
                bgColors: ['#DBD7D4'],
                colors: ['#6FA79C', '#E5A179', '#468C42', '#D7A43A'],
            },
            {
                image: '',
                title: '',
                bgColors: ['#DBD7D4'],
                colors: ['#6FA79C', '#E5A179', '#468C42', '#D7A43A'],
            },
            {
                image: '',
                title: '',
                bgColors: ['#DBD7D4'],
                colors: ['#6FA79C', '#E5A179', '#468C42', '#D7A43A'],
            },
            {
                image: '',
                title: '',
                bgColors: ['#DBD7D4'],
                colors: ['#6FA79C', '#E5A179', '#468C42', '#D7A43A'],
            }
        ]
    }
}

export default new Data();