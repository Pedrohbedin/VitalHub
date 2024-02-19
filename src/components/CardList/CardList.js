import { Card } from "../Card/Card"
import { CardListStyle } from "./style"
import React from 'react';

export const CardList = ({ data, dataLength }) => {
    return (
        <CardListStyle
            initialNumToRender={2}
            getItem
            renderItem={({ item }) => <Card paciente={'pedro'} horario={'14:00'} idade={'14'} tipoConsulta={'Urgente'} />}
            keyExtractor={item => item.id}
        />
    )
}