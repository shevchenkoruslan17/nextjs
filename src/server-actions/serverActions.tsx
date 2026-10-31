'use server';

import sql from 'better-sqlite3';
import {revalidatePath} from "next/cache";

const db = sql('meals.db');


export const saveMeal = async (formData: FormData) => {
    // console.log(formData);
    // console.log('saveAction');
    // fetch post
    // do some stuff
    // add data to db


    const titleValue = formData.get('title');

    db.prepare(`insert into meals(title)
                values (?)`)
        .run(titleValue);
    // redirect('asghagfsd')
    revalidatePath('/');
}

type Meal = { id: number, title: string };
export const getMeals = async (): Promise<Meal[]> => {
    return db.prepare<Meal[]>('select * from meals').all() as Meal[];
}