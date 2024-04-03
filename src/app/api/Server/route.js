import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    return NextResponse.json({ message: "DATA FROM BACKEND." }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
