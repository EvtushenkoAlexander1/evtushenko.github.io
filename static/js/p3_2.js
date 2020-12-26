function count(iterable) {
    const elements = {}
    for (let element of iterable) {
        if (element in elements) {
            elements[element]++
        } else {
            elements[element] = 1
        }
    }
    return elements
}


function display_in_new_window(text) {
    const msg_box = open('', '', 'height=300,width=400')
    if (msg_box == null) {
        throw new Error('Please, allow pop-ups')
    }
    msg_box.document.write(text)
}


function zfill2(object) {
    return object.toString().padStart(2, '0')
}


function format_time(date) {
    return `${zfill2(date.getHours())}:${zfill2(date.getMinutes())}:${zfill2(date.getSeconds())}`
}


function* get_color_generator() {
    const flag = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
    let flag_i = 0

    while (true) {
        if (flag_i > flag.length - 1) {
            flag_i = 0;
        }

        yield flag[flag_i++];
    }
}


act1.onclick = () => {
    display_in_new_window(input.value.split(' ').filter(word => word.length <= 5).join('<br>'))
}

act2.onclick = () => {
    let max_letter_count = -Infinity
    let max_letter
    for (let [letter, letter_count] of Object.entries(count(input.value))) {
        if (!letter.match(/^[a-zа-я]+$/i)) {
            continue
        }
        if (letter_count > max_letter_count) {
            max_letter_count = letter_count
            max_letter = letter
        }
    }
    display_in_new_window(input.value.split(max_letter).join(''))
}

act3.onclick = () => {
    display_in_new_window(input.value.split(/[0-9]/).join(''))
}

act4.onclick = () => {
    const now = new Date()
    display_in_new_window(`${zfill2(now.getDate())}.${zfill2(now.getMonth())}.${now.getFullYear()}, ${format_time(now)}`)
}

const color_generator = get_color_generator()
button_block.onclick = () => {
    document.body.style.background = color_generator.next().value
}

calc_submit.onclick = () => {
    calc_result.value = `=${eval(calc_input.value)}`
}

setInterval(() => {
    scrollBy(0, 200)
}, 10000)


setInterval(() => {
    document.title = format_time(new Date())
}, 1000)
