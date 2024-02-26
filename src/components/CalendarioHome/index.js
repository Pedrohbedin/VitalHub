import { StyleSheet } from "react-native";
import { StyledCalendarStrip } from "./style";
import moment from "moment";

export const Calendario = () => {

    const dataAtual = new Date()

    const primeiroDia = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 1)
    const ultimoDia = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + 1, 0)

    moment.updateLocale("pt-br", {
        months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),

        weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sab".split("_")
    })

    return (
        <StyledCalendarStrip
            /* animação e seleção de cada data */
            calendarAnimation={{ type: "sequence", duration: 30 }}
            daySelectionAnimation={styles.selectedAnimationStyle}

            /* seta esquerda e direita para avançar e voltar(aqui como display none) */
            iconLeftStyle={styles.iconsStyle}
            iconRightStyle={styles.iconsStyle}

            /* deixa uma marcação default - data atual */
            selectedDate={dataAtual}
            /* dia que começamos a visualizar a barra */
            startingDate={moment()}


            //data min e max - início do mês e final do mês
            minDate={primeiroDia}
            maxDate={ultimoDia}

            //estilização dos itens que não estão selecionados
            calendarHeaderStyle={styles.calendarHeaderStyle}
            dateNumberStyle={styles.numberDateStyle}
            dateNameStyle={styles.nameDateStyle}

            // estilização do item que está selecionado - efeito do item marcado
            highlightDateNameStyle={styles.selectedDateNameStyle}
            highlightDateNumberStyle={styles.selectedDateNumberStyle}
            highlightDateContainerStyle={styles.selectedContainerStyle}

            //tamanho do container
            iconContainer={{ flex: 0.1 }}

            //scroll da barra
            scrollable={true}

        />
        
    )
    
}

const styles = StyleSheet.create(
    {
        iconsStyle: {
            display: 'none'
        },
        calendarHeaderStyle: {
            fontSize: 22,
            textAlign: "center",
            alignSelf: 'flex-start',
            color: '#4E4B59',
            fontFamily: "Quicksand_600SemiBold",
            paddingHorizontal: 16
        },
        nameDateStyle: {
            color: "#ACABB7",
            fontSize: 12,
            textTransform: 'capitalize'
        },
        numberDateStyle: {
            color: "#5F5C6B",
            fontSize: 16
        },
        selectedDateNameStyle: {
            color: "white",
            fontSize: 12,
            fontWeight: "bold",
            textTransform: 'capitalize'
        },
        selectedDateNumberStyle: {
            color: "white",
            fontSize: 14
        },
        selectedContainerStyle: {
            backgroundColor: `#60BFC5`
        },
        selectedAnimationStyle: {
            type: "border",
            duration: 200,
            borderWidth: 2,
            borderHighlightColor: "#49B3BA"
        }
    }
)