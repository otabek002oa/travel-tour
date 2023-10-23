import { Column, DataType, Model, Table } from "sequelize-typescript";

interface HomeImageAttributes {
    id: string;
    page_image: string;
}

@Table({ tableName: 'home-image' })
export class HomeImage extends Model<HomeImage, HomeImageAttributes>{
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
    })
    id: string;

    @Column({
        type: DataType.STRING,
    })
    page_image: string;
}