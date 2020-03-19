// Calcula la diferencia de años.
export const diffYear = year => new Date().getFullYear() - year;

// Resta el precio por segun el año del vehiculo.
export const subtractPriceYear = (precioBase, difference, percentage) => precioBase -= (( difference * percentage ) * precioBase) / 100;

// Calcula el precio segun la marca.
export const calcPriceType = ( precioBase, percentage ) => precioBase = precioBase * percentage;

// Retorna el valor calculado segun la marca.
export const addPriceType = (marca, priceBase) => {
    switch (marca) {
        case "Asiatico":
            return calcPriceType(priceBase, 1.05);
        case "Americano":
            return calcPriceType(priceBase, 1.15);
 
        case "Europeo":
            return calcPriceType(priceBase, 1.30);
    };
}

// Calcular precio final del seguro segun el plan seleccionado.
export const calcPricePlan = (priceBase, plan) => (plan === 'completo' ? priceBase * 1.5 : priceBase * 1.2);

// Capitalize
export const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1);

