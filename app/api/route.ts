import { NextResponse } from "next/server";
import first_part from "./first_part.json";
import second_part from "./second_part.json";
import episode from './episodes.json';

export async function GET(request: Request) {
    var randomIndex = Math.floor(Math.random() * first_part.length);
    var FirstPart = first_part[randomIndex];
    var SecondPart = second_part[randomIndex];
    var Episode = episode[randomIndex];
    return NextResponse.json({ first: FirstPart, second: SecondPart, episode: Episode }, { status: 200 });
}