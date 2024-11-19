import { Type } from "class-transformer";
import { IsNumber, IsString, Min } from "class-validator";

export class CreateInsumoDto {

    @IsString()
    public name: string;

    @IsNumber({
        maxDecimalPlaces:5
    })
    @Min(0)
    @Type(() => Number)
    public price: number;

    @IsNumber()
    @Min(0)
    public currentStock: number; // cantidad actual en inventario

    @IsString()
    public location: string; //ubicación del producto.

    @IsNumber()
    @Min(0)
    public committedStock:number;  //cantidad comprometida

    @IsNumber()
    @Min(0)
    public incomingStock: number;

    @IsString()
    public category: string;      // Categoría del insumo (e.g., memoria, disco, fuente)

    @IsString()
    public subcategory: string;   // Subcategoría del insumo (e.g., RAM, SSD, PSU)

    @IsString()
    public code: string;          // Código del insumo

    @IsString()
    public description: string;   // Descripción del insumo

    @IsString()
    public condition: string;     // Estado del insumo (nuevo, usado)

    @IsNumber({
        maxDecimalPlaces:5
    })
    @Min(0)
    @Type(() => Number)
    public costPrice: number;     // Precio de costo


    @IsNumber()
    @Min(1)
    @Type(() => Number)
    public minimunStock: number; // minimo del producto para generar alerta

}
