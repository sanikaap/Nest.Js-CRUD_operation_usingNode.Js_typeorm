import { Module } from "@nestjs/common";
import { DbConnection } from "./db.source";
@Module({
    providers:[...DbConnection],
    exports:[...DbConnection]
})

export class DbModuel{}