<?php

namespace App\Http\Controllers;

use App\Models\Link;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;

class UrlController extends Controller
{
    /**
     * Shorten a given URL.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function shorten(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'url' => 'required|url',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid URL provided.',
                'errors' => $validator->errors(),
            ], 422);
        }

        $originalUrl = $request->input('url');

        // Check if the URL already exists to return the same code (optional optimization)
        $existing = Link::where('original_url', $originalUrl)->first();
        if ($existing) {
            return $this->successResponse($existing, 'URL already shortened.');
        }

        // Generate unique short code
        $shortCode = $this->generateUniqueCode();

        $link = Link::create([
            'original_url' => $originalUrl,
            'short_code' => $shortCode,
            'clicks' => 0,
        ]);

        return $this->successResponse($link, 'URL shortened successfully.', 201);
    }

    /**
     * Generate a unique 6-character short code.
     *
     * @return string
     */
    private function generateUniqueCode()
    {
        do {
            $code = Str::lower(Str::random(6));
        } while (Link::where('short_code', $code)->exists());

        return $code;
    }

    /**
     * Standard success response.
     */
    private function successResponse($link, $message, $status = 200)
    {
        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => [
                'original_url' => $link->original_url,
                'short_code' => $link->short_code,
                'short_url' => url('/' . $link->short_code),
                'clicks' => $link->clicks,
            ]
        ], $status);
    }
}
