import { useState } from "react";
import { StyleSheet } from "react-native";
import { CalendarList, LocaleConfig } from "react-native-calendars";
import moment from "moment";

import { StyledCalendarStrip } from "./style";


const CalendarComponent = () => {
  const [selected, setSelected] = useState("");

  const currentDate = new Date();
  const startingDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());


  LocaleConfig.locales["pt-br"] = {
    monthNames: [
      "Janeiro", "Fevereiro", "Março", "Abril",
      "Maio", "Junho", "Julho", "Agosto",
      "Setembro", "Outubro", "Novembro", "Dezembro",
    ],
    monthNamesShort: [
      "Jan", "Fev", "Mar", "Abr", "Mai",
      "Jun", "Jul", "Ago", "Set", "Out",
      "Nov", "Dez",
    ],
    dayNames: [
      "Domingo", "Segunda", "Terça", "Quarta",
      "Quinta", "Sexta", "Sábado",
    ],
    dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
  };
  LocaleConfig.defaultLocale = "pt-br";

  return (
    <CalendarList
      style={{
        width: 360,
        alignSelf: 'center',
        backgroundColor: '#FAFAFA'
      }}
      horizontal={true}
      // Enable paging on horizontal, default = false
      pagingEnabled={true}
      // Set custom calendarWidth.
      calendarWidth={360}
      calendarHeight={350}

      onDayPress={(day) => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {
          selected: true,
          disableTouchEvent: true
        },
      }}

      minDate={startingDate.toString()}

      theme={{
        calendarBackground: '#FAFAFA',
        arrowColor: "#FFFFFF",
        textDisabledColor: '#C6C5CE',
        todayTextColor: '#5F5C6B',
        selectedDayTextColor: '#FAFAFA',
        selectedDayBackgroundColor: '#60BFC5',

        textDayFontSize: 16,
        textMonthFontSize: 20,
        textDayHeaderFontSize: 12,

        textDayStyle: { "color": '#5F5C6B' },

        textDayFontFamily: "Quicksand_600SemiBold",
        textDayHeaderFontFamily: "Quicksand_600SemiBold",
        textMonthFontFamily: "MontserratAlternates_600SemiBold",
      }}
    />
  );
};

export default CalendarComponent;

export const HomeCalendarComponent = () => {

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